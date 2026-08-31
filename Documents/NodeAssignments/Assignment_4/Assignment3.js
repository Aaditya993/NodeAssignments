import { createServer } from 'http';

const server = createServer((req, res) => {
    // Route handling
    if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        const studentData = {
            id: 101,
            name: "Aaditya",
            course: "BTech",
            semester: 3,
            city: "Nerul"
        };
        
        res.end(JSON.stringify(studentData));
    } else {
        // 404 for any other route
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Assignment 3 Server is running on http://localhost:3000');
});