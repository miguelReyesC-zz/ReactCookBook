var mongoose = require('mongoose');  
var Comments  = mongoose.model('Comments');

exports.findAllComments = function(req, res) {  
    Comments.find(function(err, comments) {
    if(err){
    	res.send(500, err.message);
    }
    	console.log('GET /comments');
        res.status(200).jsonp(comments);
    });
};