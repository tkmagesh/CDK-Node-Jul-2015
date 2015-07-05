var _actions = {
    GET : {
    },
    POST : {
    }
}

function router(req, res, next){
    var method = req.method;
    var url = req.url.pathname;
    var action = _actions[method][url];
    if (action){
        action(req, res, next);
    } else {
        next();
    }
}

router.get = function(url, action){
    _actions.GET[url] = action;
}

router.post = function(url, action){
    _actions.POST[url] = action;
}

module.exports = router;
