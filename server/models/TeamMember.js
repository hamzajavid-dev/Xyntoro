const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        enum: ['leadership', 'core', 'support'],
        default: 'core'
    },
    order: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
