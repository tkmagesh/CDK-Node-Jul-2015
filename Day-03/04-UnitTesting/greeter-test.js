var sut = require("./greeter");


module.exports["Greeting in the morning"] = function(test){

    //arrange
    var name = "Magesh";
    var expectedResult = "Hi Magesh, Good Morning!";
    var getHoursCalled = false;
    Date.prototype.getHours = function(){
        getHoursCalled = true;
        return 4;
    }
    //act
    var result = sut.greet(name);

    //assert
    test.ok(getHoursCalled);
    test.equal(result, expectedResult, "morning greeting failed");
    test.done();
};


module.exports["Greeting in the evening"] = function(test){

    //arrange
    var name = "Magesh";
    var expectedResult = "Hi Magesh, Good Evening!";
    Date.prototype.getHours = function(){ return 14;}
    //act
    var result = sut.greet(name);

    //assert
    test.equal(result, expectedResult, "evening greeting failed");
    test.done();
};
