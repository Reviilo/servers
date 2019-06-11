var util = require('util'),
    connect = require('connect'),
    port = 1337;

console.log('__dirname', __dirname);

connect.createServer(connect.static(__dirname).listen(port));
util.puts('Listening on ' + port + '...');
util.puts('Press Ctrl + c to Stop');