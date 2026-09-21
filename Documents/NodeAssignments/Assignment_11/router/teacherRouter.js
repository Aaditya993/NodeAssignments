const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const Teacher = require('../model/teacherModel');

// Validation Rules
const teacherValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    subject: Joi.string().required()
});

router.post('/register', async (req, res) => {
    // 1. Validate data
    const { error, value } = teacherValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        // 2. Hash Password using bcrypt
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(value.password, salt);

        // 3. Store in MongoDB with the hashed password
        const newTeacher = new Teacher({
            ...value,
            password: hashedPassword
        });

        await newTeacher.save();
        res.status(201).json({ message: "Teacher registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

module.exports = router;