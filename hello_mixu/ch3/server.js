var http = require('http'),
    url  = require('url'),
    fs   = require('fs');

var port = '5000';

var messages = ["testing"];
var clients  = [];

http.createServer(function (req, res) {
    fs.readFile('./index.html', function(err, data) {
        res.end(data);
    });
    //res.end("Hello world");
}).listen(port, 'localhost');
console.log('Server running.');
