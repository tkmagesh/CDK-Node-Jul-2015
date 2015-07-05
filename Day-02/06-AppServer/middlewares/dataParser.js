var url = require("url");
var querystring = require("querystring");


module.exports = function(req, res, next){
    req.handled = false;
    req.url = url.parse(req.url);
    req.query = querystring.parse(req.url.query);
    req.field = function(attrName){
        return req.query[attrName] || req.body[attrName];
    };

    if (req.method === "POST"){
        var input = '';
        req.on('data', function(chunk){
            input += chunk;
        });
        req.on('end', function(){
            req.body = querystring.parse(input);
            next();
        });
    } else {
        next();
    }

}
