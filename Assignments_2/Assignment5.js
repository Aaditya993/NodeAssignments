const http = require('http');


const navMenu = `
    <nav>
        <a href="/">Home</a> | 
        <a href="/about">About Me</a> | 
        <a href="/skills">Skills</a> | 
        <a href="/projects">Projects</a> | 
        <a href="/contact">Contact Details</a>
    </nav>
    <hr>
`;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body>${navMenu}<h2>Home</h2><p>Welcome to my personal portfolio.</p></body></html>`);
        
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body>${navMenu}<h2>About Me</h2><p>I am a passionate web developer.</p></body></html>`);
        
    } else if (req.url === '/skills') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body>${navMenu}<h2>Skills</h2><p>HTML, CSS, JavaScript, Node.js.</p></body></html>`);
        
    } else if (req.url === '/projects') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body>${navMenu}<h2>Projects</h2><p>Check out my latest web development work.</p></body></html>`);
        
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<html><body>${navMenu}<h2>Contact Details</h2><p>Email me at aaditya03bho08@gmail.com</p></body></html>`);
        
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`<html><body><h2>404 - Page Not Found</h2><p>The page you are looking for does not exist.</p><a href="/">Go back to Home</a></body></html>`);
    }
});

server.listen(3000, () => {
    console.log('Assignment 5 Server is running on http://localhost:3000');
});