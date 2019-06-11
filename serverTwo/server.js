var express = require('express'),
    app = express();

app.configure( () => {
    app.use(express.static(__dirname + '/static'))
});

app.get('/', (req, res) => {
    res.sendFile(__dirname, + '/index.html');
});

app.listen(3000);