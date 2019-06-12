var http = require('http');
var uc = require('upper-case');

var server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc('Hello World.'));
    res.end();
}).listen(5000, '127.0.0.1', () => console.log(`Servidor corriendo en http://127.0.0.1:5000`));