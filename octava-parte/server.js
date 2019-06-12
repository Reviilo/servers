const http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer( (req, res) => {

    var q = url.parse(req.url, true);
    var filename = "./html/" + q.pathname;

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('404 Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
        }
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en ${hostname}:${port}`);
})