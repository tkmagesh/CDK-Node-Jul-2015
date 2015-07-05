module.exports = function(req, res, next){
    if (!req.handled){
        res.statusCode = 404;
        res.end();
        next();
    }
}
