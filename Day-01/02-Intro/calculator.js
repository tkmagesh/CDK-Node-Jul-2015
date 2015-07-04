/*var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
};*/

console.log("calculator is loading");

var instanceCount = 0;

function getCalculator(){
    instanceCount++;
    var result = 0;
    return {
        add : function(n){
            result += n;
        },
        subtract : function(n){
            result -= n;
        },
        multiply : function(n){
            result *= n;
        },
        divide : function(n){
            result /= n;
        },
        getResult : function(){
            return result;
        }
    }
};

getCalculator.getInstanceCount = function(){
    return instanceCount;
}
module.exports = getCalculator;

