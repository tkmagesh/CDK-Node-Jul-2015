
var fs = require("fs");
var path = require("path");


var staticResourceExtns = [".html",".css",".js",".png",".jpg",".ico",".txt",".json"];

function isStaticResource(resource){
    var resourceExtn = path.extname(resource);
    return staticResourceExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(publicFolder) {
    return function(req, res, next){
        if (isStaticResource(req.url.pathname)){
            var resourcePath = path.join(publicFolder, req.url.pathname);
            if (fs.existsSync(resourcePath)){
                req.handled = true;
                fs.createReadStream(resourcePath).pipe(res);
            } else {
                res.statusCode = 404;
                res.end();
            }
        } else {
            next();
        }
    }
};
