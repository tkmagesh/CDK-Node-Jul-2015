var calculator = require("./calculator");
module.exports["calculator add operation"] = function(test){
    var number1 = 100,
        number2 = 200,
        expectedResult = 300;
    var result = calculator.add(number1, number2);
    test.equal(result, expectedResult, "Add failed");
    test.done();
}
module.exports["calculator subtract operation"] = function(test){
    var number1 = 100,
        number2 = 200,
        expectedResult = -100;
    var result = calculator.subtract(number1, number2);
    test.equal(result, expectedResult, "Subtract failed");
    test.done();
}
