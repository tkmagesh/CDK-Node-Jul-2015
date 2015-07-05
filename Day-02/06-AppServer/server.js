var http = require("http");
var path = require("path");
var dataParser = require("./middlewares/dataParser");
var serveStatic = require("./middlewares/serveStatic");
var calculatorProcessor = require("./app/calculatorProcessor");
var notFoundAction = require("./middlewares/notFoundAction");
var appEngine = require("./middlewares/appEngine");

var router = require("./middlewares/router");
router.post("/calculator", calculatorProcessor);


appEngine.use(dataParser);
appEngine.use(serveStatic(path.join(__dirname, "public")));
appEngine.use(router);
appEngine.use(notFoundAction);

var server = http.createServer(appEngine);
server.listen(8080);
console.log("server listening on port 8080");
