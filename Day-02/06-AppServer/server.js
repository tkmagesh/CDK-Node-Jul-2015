var http = require("http");
var dataParser = require("./dataParser");
var serveStatic = require("./serveStatic");
var calculatorProcessor = require("./calculatorProcessor");
var notFoundAction = require("./notFoundAction");

var appEngine = require("./appEngine");
appEngine.use(dataParser);
appEngine.use(serveStatic);
appEngine.use(calculatorProcessor);
appEngine.use(notFoundAction);

var server = http.createServer(appEngine);
server.listen(8080);
console.log("server listening on port 8080");
