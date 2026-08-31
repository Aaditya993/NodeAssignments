import { createServer } from 'http';

const server = createServer((req, res) => {
    // Setting content type to HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // HTML content to be sent
    const htmlResponse = `
        <h1>Student Portal</h1>
        <p><strong>Name:</strong> Aaditya Bhosale</p>
        <p><strong>Course:</strong> Full Stack Development</p>
        <p><strong>College:</strong>ITM Skills University</p>
        <p>Welcome to our Node.js application.</p>
    `;
    
    res.end(htmlResponse);
});

server.listen(3000, () => {
    console.log('Assignment 2 Server is running on http://localhost:3000');
});