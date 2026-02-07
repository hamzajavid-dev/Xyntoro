const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const TeamMember = require('../models/TeamMember');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure multer for Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'xyntoro-team',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        transformation: [{ width: 500, height: 500, crop: 'limit' }]
    },
});

const upload = multer({ storage: storage });

// GET all team members
router.get('/', async (req, res) => {
    try {
        const members = await TeamMember.find().sort({ category: 1, order: 1 });
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single team member
router.get('/:id', async (req, res) => {
    try {
        const member = await TeamMember.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Member not found' });
        res.json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create team member with optional image upload
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const memberData = {
            name: req.body.name,
            role: req.body.role,
            category: req.body.category || 'core',
            order: req.body.order || 0
        };

        // If file was uploaded, use its path (Cloudinary URL); otherwise use the picture URL
        if (req.file) {
            memberData.picture = req.file.path;
        } else if (req.body.picture) {
            memberData.picture = req.body.picture;
        }

        const member = new TeamMember(memberData);
        const newMember = await member.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update team member with optional image upload
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const member = await TeamMember.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Member not found' });

        if (req.body.name) member.name = req.body.name;
        if (req.body.role) member.role = req.body.role;
        if (req.body.category) member.category = req.body.category;
        if (req.body.order !== undefined) member.order = parseInt(req.body.order);

        // If new file was uploaded, use its path (Cloudinary URL)
        if (req.file) {
            member.picture = req.file.path;
        } else if (req.body.picture !== undefined) {
            member.picture = req.body.picture;
        }

        const updatedMember = await member.save();
        res.json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE team member
router.delete('/:id', async (req, res) => {
    try {
        const member = await TeamMember.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Member not found' });
        await member.deleteOne();
        res.json({ message: 'Member deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
