var mongoose = require('mongoose');  
var Users  = mongoose.model('Users');

exports.findAllUsers = function(req, res) {  
    Users.find(function(err, users) {
    if(err){
    	res.send(500, err.message);
    }
    	console.log('GET /users');
        res.status(200).jsonp(users);
    });
};