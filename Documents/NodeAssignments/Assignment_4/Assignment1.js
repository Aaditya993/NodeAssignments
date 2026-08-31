//Basic HTTP Server

import { createServer } from 'http';

const server = createServer((req, res) => {
    // Setting the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Display message in the browser
    res.end('Welcome to Node.js Server');
});

// Run server on Port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});