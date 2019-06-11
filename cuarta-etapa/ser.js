var http = require('http');
var dt = require('./dateTime')

var hostname = '127.0.0.1';
var port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('The Date and Time are currently ' + dt.dateTime() + '\n' + req.url);
    res.end();
}).listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

