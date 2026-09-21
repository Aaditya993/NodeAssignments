const express = require('express');
const userRouter = require('./router/userRouter');
require('./config/firebase'); // Imports Firebase to trigger the connection log

const app = express();
app.use(express.json()); 

app.use('/api', userRouter);

app.listen(3000, () => console.log('Server running on port 3000'));