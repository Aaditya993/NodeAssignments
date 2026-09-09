const express = require('express');
const app = express();

app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;
    res.send(`Student ID: ${id}<br>Name: ${name}<br>Course: ${course}`);
});

app.listen(3000, () => console.log('Server 3 running on port 3000'));