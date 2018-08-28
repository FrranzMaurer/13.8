var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
            fs.readFile('./index.js', 'utf-8', function(data) {
            response.write(data);
            response.end();
        });
    } else {
            response.statusCode = 404;
            response.write("<img src=" + 'https://discourse-cdn-sjc1.com/business5/uploads/gemsofwar/original/3X/7/e/7e9b5761595dcfeda805afa3d77a7ba5e81b06c1.jpg' + "/>");
            response.end();
    }
});
server.listen(8080);