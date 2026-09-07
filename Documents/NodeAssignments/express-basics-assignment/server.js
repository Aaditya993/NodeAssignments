const express = require('express');
const app = express();
const PORT = 3000;

// Task 5: Request-Response Understanding (Middleware)

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Task 1: Basic Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

// Task 2: Route Parameter (Dynamic Route)
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello ${userName}`);
});

// Task 3: Multiple Route Parameters
app.get('/product/:id/:category', (req, res) => {
    const { id, category } = req.params;
    res.send(`Product ID: ${id}, Category: ${category}`);
});

// Task 4: Query Parameters
app.get('/search', (req, res) => {
    const { name, role } = req.query;
    res.send(`Name: ${name}, Role: ${role}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});