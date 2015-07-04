var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);

    console.log(resourcePath);
    fs.createReadStream(resourcePath).pipe(res);
});

server.listen(8080);
console.log("server listening on port 8080");

/*
res.statusCode = 404;

*/
