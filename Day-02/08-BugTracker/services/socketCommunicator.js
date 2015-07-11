var io = require('socket.io');
var socketServer = null;
module.exports = {
    setServer : function(server){
        socketServer = io(server);
    },
    trigger : function(eventName, msg){
        socketServer.emit(eventName, msg);
    }
}
