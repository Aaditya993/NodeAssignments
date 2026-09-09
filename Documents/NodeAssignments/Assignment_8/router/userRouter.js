const express = require('express');
const router = express.Router();
const User = require('../model/userModel');

// POST API: Add a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User added successfully", data: newUser });
    } catch (error) {
        res.status(500).json({ error: "Failed to add user" });
    }
});

// GET API: Retrieve all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

module.exports = router;