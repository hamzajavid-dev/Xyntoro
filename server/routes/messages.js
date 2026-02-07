const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages (for admin)
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET unread count
router.get('/unread-count', async (req, res) => {
    try {
        const count = await Message.countDocuments({ read: false });
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create new message (public endpoint for contact form)
router.post('/', async (req, res) => {
    const message = new Message({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        heardFrom: req.body.heardFrom,
        message: req.body.message
    });

    try {
        const newMessage = await message.save();
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT mark message as read
router.put('/:id/read', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message not found' });
        message.read = true;
        await message.save();
        res.json(message);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE message
router.delete('/:id', async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message not found' });
        await message.deleteOne();
        res.json({ message: 'Message deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
