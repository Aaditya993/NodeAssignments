const express = require('express');
const app = express();

app.get('/student/:id', (req, res) => {
    res.send(`Student ID: ${req.params.id}`);
});

app.listen(3000, () => console.log('Server 1 running on port 3000'));