const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Check the URL of the current request
    if (req.url === '/') {
        serveHTMLFile('home.html', res);
    } else if (req.url === '/about') {
        serveHTMLFile('about.html', res);
    } else if (req.url === '/contact') {
        serveHTMLFile('contact.html', res);
    } else {
        // If the URL doesn't match any of the above, respond with an error message
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Invalid Request');
    }
});

const PORT = 1000;

server.listen(PORT, () => {
    console.log(`The NodeJS server on port ${PORT} is now running...`);
});

function serveHTMLFile(filename, res) {
    const filePath = path.join(__dirname, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
}
