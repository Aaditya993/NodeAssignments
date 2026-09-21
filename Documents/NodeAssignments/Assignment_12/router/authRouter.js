const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../schema/userSchema');




const router = express.Router();

// POST /register endpoint
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // 2. Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. Create and save the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // 4. Return the exact success message required by the assignment
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during registration" });
    }
});


// POST /login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // 2. Compare the entered password with the stored bcrypt hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // 3. Generate the JWT token using your secret from .env
        const token = jwt.sign(
            { id: user._id, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // 4. Return the required success response
        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during login" });
    }
});

const authMiddleware = require('../middleware/auth'); // Import the middleware

// GET /profile endpoint (Protected)
router.get('/profile', authMiddleware, (req, res) => {
    // This only runs if authMiddleware says YES
    res.status(200).json({
        message: "Welcome to your private profile",
        user: {
            id: req.user.id,
            email: req.user.email
        }
    });
});

module.exports = router;