const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const { name, course } = req.query;
    if (!name && !course) {
        return res.send('No search data provided.');
    }
    res.send(`Name: ${name}<br>Course: ${course}`);
});

app.listen(3000, () => console.log('Server 2 running on port 3000'));