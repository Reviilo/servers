var http = require('http'),
    ulr = require('url'),
    fs = require('fs'),
    hostname = '127.0.0.1',
    port = 3000;

var server = http.createServer( function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, function () {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
})