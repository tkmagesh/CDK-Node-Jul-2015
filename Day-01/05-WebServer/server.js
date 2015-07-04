var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");
var calculator = require("./calculator");



var staticResourceExtns = [".html",".css",".js",".png",".jpg",".ico",".txt",".json"];

function isStaticResource(resource){
    var resourceExtn = path.extname(resource);
    return staticResourceExtns.indexOf(resourceExtn) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url);
    req.query = querystring.parse(req.url.query);

    if (isStaticResource(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === "/calculator"){
        var number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10),
            operation = req.query.operation;

        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }

});
server.listen(8080);
console.log("server listening on port 8080");


/*
http://localhost:8080/calculator?number1=100&number2=200&operation=add

req.url => /calculator?number1=100&number2=200&operation=add

url.parse(req.url)
querystring.parse()

1. parse the url
2. check if the requested resource is a static resource [".html",".css",".js",".jpg",".png",".ico"]

3. if static resource serve it if exists else serve 404
4. check if the requested resource = '/calculator'
5. if yes parse the querystring and use the 'calculator.js' to get the result and send the same to the user
6. else serve 404
*/
