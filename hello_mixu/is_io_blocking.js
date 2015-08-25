setTimeout(function() {
    console.log('setTimeout at ' +new Date().toTimeString());
}, 1000);

var fs = require('fs');

fs.readFile('/etc/passwd', function(err, result) {
    console.log(result);
});
