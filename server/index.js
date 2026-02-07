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

// Connect to MongoDB
const connectDB = async () => {
    if (mongoose.connection.readyState === 1) return;
    
    if (process.env.MONGODB_URI) {
        try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('MongoDB connection error:', error);
        }
    }
};

// Ensure DB connection for every request (Serverless friendly)
app.use(async (req, res, next) => {
    await connectDB();
    next();
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
