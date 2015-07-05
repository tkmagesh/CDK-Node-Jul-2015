var _middlewares = [];

function app(req, res){
    function action(middlewares){
        var first = middlewares[0],
            remaining = middlewares.slice(1),
            next = function(){
                action(remaining);
            };
        if (typeof first === "function"){
            first(req, res, next);
        }
    }
    action(_middlewares);
}

app.use = function(middleware){
    _middlewares.push(middleware);
}

module.exports = app;
