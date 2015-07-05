var guid = require("guid");

var sessionStore = {

}

module.exports = function(req, res, next){
    var sessionCookieValue = req.cookies["sessionId"];
    if (!sessionCookieValue){
        //new Session
        var newSessionId = guid.raw();
        res.cookie("sessionId", newSessionId);
        sessionStore[newSessionId] = {};
        req.session = sessionStore[newSessionId];
        req.session.isNew = true;
    } else {
        //session exists
        req.session = sessionStore[sessionCookieValue];
        if (!req.session){
            req.session = sessionStore[sessionCookieValue] = {};
            req.session.isNew = true;
        } else {
            req.session.isNew = false;
        }
    }
    next();
}

