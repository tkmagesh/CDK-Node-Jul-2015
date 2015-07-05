module.exports = function(req, res, next){

    if (!req.session.reqCount)
        req.session.reqCount = 0;

    ++req.session.reqCount;
    next();
}
