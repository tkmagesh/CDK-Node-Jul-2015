var fs = require("fs");

module.exports = {
    parse : function(fileName, callback){
        if (!fs.existsSync(fileName)){
            callback(new Error("File not found"), null);
            return;
        }
        fs.readFile(fileName, {encoding : 'utf8'}, function(err, contents){
            if (err){
                callback(err, null);
                return;
            }
            var result = contents.split('\r\n').map(function(line){
                var cols = line.split(',');
                return {
                    value : parseInt(cols[0],10),
                    action : cols[1]
                }
            });
            //return result;
            callback(null, result);
        })
    }
};
