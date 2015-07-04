var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");
var calculator = require("./calculator");

/*
1. data parse
2. serving static resources
3. serving /calculator requests
4. not found response
*/

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
    } else if (req.url.pathname === "/calculator" && req.method === "GET"){
        var number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10),
            operation = req.query.operation;

        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === "/calculator" && req.method === "POST"){
        var input = '';
        req.on('data', function(chunk){
            input += chunk;
        });
        req.on('end', function(){
            req.body = querystring.parse(input);
            var number1 = parseInt(req.body.number1,10),
                number2 = parseInt(req.body.number2,10),
                operation = req.body.operation;

            var result = calculator[operation](number1, number2);
            res.write(result.toString());
            res.end();
        })

    } else {
        res.statusCode = 404;
        res.end();
    }

});
server.listen(8080);
console.log("server listening on port 8080");
