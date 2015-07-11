var nodejsWebsocket = require("nodejs-websocket");

var server = nodejsWebsocket.createServer(function(connection){
    console.log("A new connection is established");
    var timer = null;
    connection.on("text", function(msg){
        console.log("message = ", msg);
        if (msg === "start"){
            timer = setInterval(function(){
                connection.sendText(new Date().toString());
            }, 3000);
        } else if (msg === "stop"){
            if (timer) clearInterval(timer);
        } else {
            console.log("unknown message");
        }
    });
    connection.on("error", function(){
        console.log("something went wrong");
    });
});
server.listen(9090);
console.log("Socket server listening on port 9090");
