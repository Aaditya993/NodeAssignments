const http = require('http');

// 1. Reusable HTML Header with CSS Styling
const htmlHeader = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aaditya Bhosale | Portfolio</title>
    <style>
        body {
            font-family: 'Courier New', Courier, monospace;
            background-color: #0a0a0a;
            color: #d1d5db;
            margin: 0;
            padding: 40px 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        nav {
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid #333;
        }
        nav a {
            color: #00ffcc;
            text-decoration: none;
            margin-right: 20px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        nav a:hover {
            color: #ffffff;
            text-shadow: 0 0 8px #00ffcc;
        }
        h1, h2, h3 {
            color: #ffffff;
        }
        .card {
            background-color: #171717;
            padding: 20px;
            margin-bottom: 20px;
            border-left: 4px solid #00ffcc;
            border-radius: 4px;
        }
        ul {
            list-style-type: square;
            color: #00ffcc;
        }
        ul span {
            color: #d1d5db;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>
`;

// 2. Reusable HTML Footer
const htmlFooter = `
    </div>
</body>
</html>
`;

// 3. Server Logic and Routes
const server = http.createServer((req, res) => {
    
    // Default Header for all successful requests
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            ${htmlHeader}
            <h1>Aaditya Bhosale</h1>
            <p>Frontend Developer & Motion Graphics Artist</p>
            <div class="card">
                <p>Welcome to my server-side rendered portfolio, built entirely from scratch using the native Node.js HTTP module.</p>
            </div>
            ${htmlFooter}
        `);
        
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            ${htmlHeader}
            <h2>About Me</h2>
            <div class="card">
                <p>I am a developer who bridges the gap between clean code and compelling visual aesthetics. I am passionate about building responsive web applications, understanding how backend infrastructure works, and creating dynamic motion graphics that elevate digital experiences.</p>
            </div>
            ${htmlFooter}
        `);
        
    } else if (req.url === '/skills') {
        res.writeHead(200);
        res.end(`
            ${htmlHeader}
            <h2>Technical Arsenal</h2>
            <div class="card">
                <h3>Development</h3>
                <ul>
                    <li><span><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React, Bootstrap</span></li>
                    <li><span><strong>Backend:</strong> Node.js (Learning)</span></li>
                    <li><span><strong>Languages:</strong> C++</span></li>
                </ul>
            </div>
            <div class="card">
                <h3>Design & Video</h3>
                <ul>
                    <li><span><strong>Motion Graphics:</strong> Adobe After Effects, DaVinci Resolve</span></li>
                    <li><span><strong>Editing:</strong> CapCut, Filmora</span></li>
                </ul>
            </div>
            ${htmlFooter}
        `);
        
    } else if (req.url === '/projects') {
        res.writeHead(200);
        res.end(`
            ${htmlHeader}
            <h2>Featured Projects</h2>
            <div class="card">
                <h3>Konvo</h3>
                <p>Conceptualized a SaaS conversational AI tool, developing the initial startup pitch deck and accompanying motion graphics for brand promotion.</p>
            </div>
            <div class="card">
                <h3>WeWork Frontend Clone</h3>
                <p>Developed a functional multi-page clone of the WeWork website using HTML5 and CSS, implementing complex navigation and location features.</p>
            </div>
            <div class="card">
                <h3>Warehouse Automation System</h3>
                <p>Built a command-line stock management system in C++ featuring inventory tracking, automated reorder alerts, and custom class architecture.</p>
            </div>
            <div class="card">
                <h3>School Duty Scheduler</h3>
                <p>Created an automated examination duty scheduler utilizing no-code platforms with integrated email triggers for faculty.</p>
            </div>
            ${htmlFooter}
        `);
        
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end(`
            ${htmlHeader}
            <h2>Contact Details</h2>
            <div class="card">
                <p>Ready to collaborate?</p>
                <ul>
                    <li><span><strong>Email:</strong> aadi03bho08@gmail.com</span></li>
                    <li><span><strong>GitHub:</strong> github.com/Aaditya993</span></li>
                </ul>
            </div>
            ${htmlFooter}
        `);
        
    } else {
        res.writeHead(404);
        res.end(`
            ${htmlHeader}
            <h2>404 - System Error</h2>
            <div class="card" style="border-left-color: #ff3333;">
                <p>The requested endpoint does not exist on this server.</p>
                <a href="/" style="color: #ff3333; text-decoration: underline;">Return to Base</a>
            </div>
            ${htmlFooter}
        `);
    }
});

// 4. Initialize Server
server.listen(3000, () => {
    console.log('Assignment 5 (Enhanced Portfolio) is running on http://localhost:3000');
});