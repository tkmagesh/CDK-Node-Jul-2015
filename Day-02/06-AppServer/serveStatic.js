
var fs = require("fs");
var path = require("path");


var staticResourceExtns = [".html",".css",".js",".png",".jpg",".ico",".txt",".json"];

function isStaticResource(resource){
    var resourceExtn = path.extname(resource);
    return staticResourceExtns.indexOf(resourceExtn) !== -1;
}

module.exports = function(req, res){
    if (isStaticResource(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            req.handled = true;
            fs.createReadStream(resourcePath).pipe(res);
        }
    }
}
