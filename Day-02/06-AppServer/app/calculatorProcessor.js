var querystring = require("querystring");
var calculator = require("./calculator");

module.exports = function(req, res, next){
    var number1 = parseInt(req.field("number1"),10),
        number2 = parseInt(req.field("number2"),10),
        operation = req.field("operation");

    var result = calculator[operation](number1, number2);
    res.write(result.toString());
    res.end();
};
