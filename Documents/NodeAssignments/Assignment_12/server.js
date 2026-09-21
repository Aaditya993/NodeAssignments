require('dotenv').config(); // Loads your .env file immediately
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse incoming JSON data from requests
app.use(express.json());

const authRouter = require('./router/authRouter');
app.use('/', authRouter);

// Connect to MongoDB Atlas using your secure URI
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas successfully!'))
    .catch((err) => console.error('Atlas connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});