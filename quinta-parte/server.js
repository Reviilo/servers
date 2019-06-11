var http = require('http');
var url = require('url');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer( function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    var q = url.parse(req.url, true).query;
    var txt = Object.keys(q).length > 0 ? q.year + ' ' + q.month : 'No hay data';
    res.end(txt);
});

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});