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

    // Create Files

    fs.appendFile('texts/mynewfile1.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved 1!');
      });

    fs.open('texts/mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved 2!');
    });

    fs.writeFile('texts/mynewfile3.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved 3!');
    });

    // Update Files

    fs.appendFile('texts/mynewfile1.txt', ' This is my text.', function (err) {
        if (err) throw err;
        console.log('Updated!');
    });

    // Delete files

    fs.unlink('texts/mynewfile2.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });

    // Rename files

    fs.rename('texts/mynewfile1.txt', 'texts/myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });


});

server.listen(port, hostname, function () {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
})