var nodejsWebsocket = require("nodejs-websocket");
var http = require("http");
var path = require("path");

function app(req, res){
    var resourcePath = path.join(__dirname, req.url);
    if (resourcePath.endswith(".html")){
        require("fs").createReadStream(resourcePath).pipe(res);
    } else {
        res.statusCode = 404;
        res.end;
    }
}
var httpServer = http.Server(app);
var socketServer = nodejsWebsocket.createServer(function(connection){
    console.log("A new connection is established");
    connection.on("text", function(msg){
       server.connections.forEach(function(con){
           con.sendText(msg);
       });
    });
});
socketServer.listen(9090);
console.log("server listening on port 9090");
