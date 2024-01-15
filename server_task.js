const http = require('http');

const server = http.createServer((req, res) => {
    // Check the URL of the current request
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the homepage!');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the about page.');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Contact us at contact page');
    } else {
        // If the URL doesn't match any of the above, respond with an error message
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Invalid Request');
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`The NodeJS server on port ${PORT} is now running...`);
});
