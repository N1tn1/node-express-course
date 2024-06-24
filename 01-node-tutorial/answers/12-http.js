const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Welcome to the homepage!\n');
    } else if (req.url === '/about') {
        res.end('Welcome to the about page!\n');
    } else {
        res.end('404 Not Found!\n');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});