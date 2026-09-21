const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Joi = require('joi');
const Student = require('../model/studentModel');

// Validation Rules
const studentValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    course: Joi.string().required(),
    age: Joi.number().required()
});

router.post('/register', async (req, res) => {
    const { error, value } = studentValidation.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(value.password, salt);

        const newStudent = new Student({
            ...value,
            password: hashedPassword
        });

        await newStudent.save();
        res.status(201).json({ message: "Student registered successfully" });
    } catch (err) {
        res.status(500).json({ error: "Registration failed" });
    }
});

module.exports = router;