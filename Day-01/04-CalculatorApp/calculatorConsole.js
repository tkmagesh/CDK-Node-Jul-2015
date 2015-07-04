var calculator = require("./calculator")(),
    parser = require("./calculatorDataParser");

parser.parse("calculatorData.csv", function(err, calcData){
    if (err){
        console.log(err);
        return;
    }
    calcData.forEach(function(obj){
        calculator[obj.action](obj.value);
    });
    console.log("result = ", calculator.getResult());
});
