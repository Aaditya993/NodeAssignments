const express = require('express');
const mongoose = require('mongoose');
const teacherRouter = require('./router/teacherRouter');
const studentRouter = require('./router/studentRouter');

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log('MongoDB connection failed:', err));

// Routes
app.use('/teacher', teacherRouter);
app.use('/student', studentRouter);

app.listen(3000, () => console.log('Server running on port 3000'));