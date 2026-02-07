require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const teamRoutes = require('./routes/team');
const messageRoutes = require('./routes/messages');
const authRoutes = require('./routes/auth');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: false // Disable CSP for development - enable in production
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? true : 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/messages', messageRoutes);

// Health check
app.get('/api/health', (req, res) => {
    const dbState = mongoose.connection.readyState;
    const states = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
    res.json({ 
        status: 'OK', 
        message: 'Xyntoro API is running',
        dbStatus: states[dbState] || 'unknown'
    });
});

// Better Serverless Database Connection Pattern
let cachedPromise = null;

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    if (!cachedPromise) {
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };

        cachedPromise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
            console.log('New MongoDB Connection Established');
            return mongoose;
        }).catch(err => {
            console.error('MongoDB Connection Init Error:', err);
            cachedPromise = null; // Clear cache on error
            throw err;
        });
    }

    try {
        await cachedPromise;
        return mongoose.connection;
    } catch (e) {
         cachedPromise = null;
         throw e;
    }
};

// Ensure DB connection for every request (Serverless friendly)
app.use(async (req, res, next) => {
    // Skip db connection for static files or plain health checks
    if (req.path === '/api/health' || req.path.startsWith('/uploads')) {
        return next();
    }
    
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error('Request Connection Error:', error);
        res.status(503).json({ 
            error: 'Service Unavailable', 
            message: 'Database connection failed',
            details: error.message 
        });
    }
});

// Debug route to check DB connection directly
app.get('/api/debug-db', async (req, res) => {
    try {
        if (!process.env.MONGODB_URI) {
            return res.status(500).json({ error: 'MONGODB_URI environment variable is missing' });
        }
        
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000
        });
        
        const state = mongoose.connection.readyState;
        const host = mongoose.connection.host;
        
        res.json({ 
            status: 'success', 
            message: 'Connected to MongoDB', 
            state, 
            host 
        });
    } catch (error) {
        res.status(500).json({ 
            status: 'error', 
            message: 'Failed to connect to MongoDB', 
            error: error.message,
            code: error.code,
            name: error.name
        });
    }
});

if (process.env.NODE_ENV !== 'production') {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    });
} else {
    // Vercel serverless environment
    connectDB().catch(err => console.error('Initial DB Connection Error:', err));
}

module.exports = app;
