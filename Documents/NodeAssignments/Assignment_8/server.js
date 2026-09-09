const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./router/userRouter');

const app = express();
app.use(express.json()); // Required middleware to read JSON bodies

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/collegeDB')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log('MongoDB connection failed:', err));

// Import and use the router
app.use('/api', userRouter);

app.listen(3000, () => console.log('Server running on port 3000'));