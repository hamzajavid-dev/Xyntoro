const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./server/models/User');
require('dotenv').config({ path: './server/.env' });

const NEW_ADMIN_USER = 'admin';
const NEW_ADMIN_PASS = 'admin123';

async function createAdmin() {
    try {
        console.log('Connecting to DB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected!');

        // Check if user exists
        const existing = await User.findOne({ username: NEW_ADMIN_USER });
        if (existing) {
            console.log('User already exists. Updating password...');
            const salt = await bcrypt.genSalt(10);
            existing.password = await bcrypt.hash(NEW_ADMIN_PASS, salt);
            await existing.save();
            console.log('Password updated successfully!');
        } else {
            console.log('Creating new admin user...');
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(NEW_ADMIN_PASS, salt);
            
            const newUser = new User({
                username: NEW_ADMIN_USER,
                password: hashedPassword
            });
            await newUser.save();
            console.log('New admin user created successfully!');
        }
        
        console.log(`\n✅ CREDENTIALS SET:`);
        console.log(`Username: ${NEW_ADMIN_USER}`);
        console.log(`Password: ${NEW_ADMIN_PASS}`);
        
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error:', err);
    }
}

createAdmin();