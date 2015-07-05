var querystring = require("querystring");
var calculator = require("./calculator");

module.exports = function(req, res){
    if (req.url.pathname === "/calculator" && req.method === "GET"){
        req.handled = true;
        var number1 = parseInt(req.query.number1,10),
            number2 = parseInt(req.query.number2,10),
            operation = req.query.operation;

        var result = calculator[operation](number1, number2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === "/calculator" && req.method === "POST"){
            req.handled = true;
            var number1 = parseInt(req.body.number1,10),
                number2 = parseInt(req.body.number2,10),
                operation = req.body.operation;

            var result = calculator[operation](number1, number2);
            res.write(result.toString());
            res.end();
    }
};
