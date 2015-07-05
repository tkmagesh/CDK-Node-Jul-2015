function f1(){
    console.log("f1 is invoked");
}

function f2(){
    console.log("f2 is invoked");
}

function f3(){
    console.log("f3 is invoked");
}

function f4(){
    console.log("f4 is invoked");
}

var fns = [f1, f2, f3, f4];


function asyncf1(next){
    console.log("f1 triggered");
    setTimeout(function(){
        console.log("f1 completed");
        next();
    },3000);
}

function asyncf2(next){
    console.log("f2 triggered");
    setTimeout(function(){
        console.log("f2 completed");
        next();
    },3000);
}

function asyncf3(next){
    console.log("f3 triggered");
    setTimeout(function(){
        console.log("f3 completed");
        next();
    },3000);
}

function asyncf4(next){
    console.log("f4 triggered");
    setTimeout(function(){
        console.log("f4 completed");
        next();
    },3000);
}

var asyncFns = [asyncf1, asyncf2, asyncf3, asyncf4];

module.exports = {
    run : function(){
        for(var i=0; i<fns.length; i++)
            fns[i]();
    },
    asyncRun : function(){
        function action(fns){
            var first = fns[0],
                remaining = fns.slice(1),
                next = function(){
                    action(remaining);
                };
            if (typeof first === "function"){
                first(next);
            }
        }
        action(asyncFns);
    }
}

