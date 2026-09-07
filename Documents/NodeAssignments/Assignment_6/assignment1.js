const express = require('express');
const app = express();
const router = express.Router(); 


const getFormattedDate = () => {
    return new Date().toISOString().replace('T', ' ').substring(0, 19);
};


const routerLogger = (req, res, next) => {
    
    console.log(`${req.method} ${req.originalUrl} ${getFormattedDate()}`);
    next();
};


router.use(routerLogger);


router.get('/students', (req, res) => {
    res.send('Students List');
});

router.get('/courses', (req, res) => {
    res.send('Courses List');
});

router.get('/faculty', (req, res) => {
    res.send('Faculty List');
});


app.use('/api', router);

app.listen(3000, () => console.log('Assignment 1 Server running on port 3000'));