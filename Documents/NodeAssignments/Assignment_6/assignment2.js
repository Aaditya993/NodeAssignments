const express = require('express');
const app = express();

const getFormattedDate = () => {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
};

// Global logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${getFormattedDate()}`);
    next();
};


app.use(logger);


app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/contact', (req, res) => {
    res.send('Contact Information');
});

app.listen(3000, () => console.log('Assignment 2 Server running on port 3000'));