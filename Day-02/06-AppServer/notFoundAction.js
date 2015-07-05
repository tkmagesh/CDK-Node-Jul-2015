module.exports = function(req, res){
    if (!req.handled){
        res.statusCode = 404;
        res.end();
    }
}
