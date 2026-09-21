const express = require('express');
const router = express.Router();
const db = require('../config/firebase');
const userSchema = require('../schema/userSchema');

router.post('/users', async (req, res) => {
    // 1. Schema Validation
    const { error, value } = userSchema.validate(req.body);
    
    // 2. If validation fails, return appropriate error message
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // 3. If valid, store in Firestore 'users' collection
    try {
        const docRef = await db.collection('users').add(value);
        res.status(201).json({ 
            message: "Data stored successfully", 
            id: docRef.id 
        });
    } catch (err) {
        res.status(500).json({ error: "Failed to store data in Firestore" });
    }
});

module.exports = router;