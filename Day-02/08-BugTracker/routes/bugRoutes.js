var express = require('express');
var router = express.Router();
var socketCommunicator = require('../services/socketCommunicator');

/* GET users listing. */
// -> /bugs/

var bugList = [
    {id : 1, name : "User Authentication Failure", isClosed : false},
    {id : 2, name : "Server not responding", isClosed : false}
];

router.get('/', function(req, res, next) {
    var result = {
        list : bugList
    };
    result.reqCount = req.session.reqCount;
    res.render('bugs/index', result);
});

router.get('/new', function(req, res, next){
    var result = {};
    result.reqCount = req.session.reqCount;
    res.render('bugs/new', result);
});

router.get('/toggle/:id', function(req, res, next){
   var bugId = parseInt(req.params.id);
   var bug = bugList.filter(function(bug){
       return bug.id === bugId;
   })[0];
   if (bug){
       bug.isClosed = !bug.isClosed;
   }
   res.redirect('/bugs');
});

router.post('/new', function(req, res, next){
    var input = req.body;
    var newBugId = bugList.reduce(function(result, bug){
        return bug.id > result ? bug.id : result;
    }, 0) + 1;
    var newBug = {
        id : newBugId,
        name : input.newBugName,
        isClosed : false
    };
    bugList.push(newBug);
    socketCommunicator.trigger('newBug', JSON.stringify(newBug));
    res.redirect('/bugs');
});

module.exports = router;
