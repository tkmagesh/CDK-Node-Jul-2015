var fs = require("fs");
/*
fs.readFile("test.txt", {encoding : "utf8"}, function(err, contents){
    if (err){
        console.log("expected error", err);
        return;
    }
    console.log(contents);
});
*/

var stream = fs.createReadStream("test.txt", {encoding : "utf8"});

var readCount = 0;
/*stream.on("data", function(chunk){
    ++readCount;
    console.log(chunk);
});
stream.on("end", function(){
    console.log("EOF - with readCount : ", readCount);
});*/

stream.pipe(process.stdout);
