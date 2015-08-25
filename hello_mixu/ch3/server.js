var http = require('http'),
    url  = require('url'),
    fs   = require('fs');

var port = '5000';

var messages = ["testing"];
var clients  = [];

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    if (url_parts.pathname === '/') {
        fs.readFile('./index.html', function(err, data) {
            res.end(data);
        });
    } else if (url_parts.pathname.substr(0, 5) == '/poll') {
        var count = url_parts.pathname.replace(/[^0-9]*/, '');
        console.log(count);
        if (messages.length > count) {
            res.end(JSON.stringify(
                {
                    count: messages.length,
                    append: messages.slice(count).join("\n") + "\n"
                }
            ));
        } else {
            clients.push(res);
        }
        // polling code here
    } else {
        res.end("404");
    }
}).listen(port, 'localhost');
console.log('Server running at port ' + port);
