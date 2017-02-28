var mongoose = require('mongoose');  
var Receipes  = mongoose.model('Receipes');

exports.findAllReceipes = function(req, res) {  
    Receipes.find(function(err, receipes) {
    if(err){
    	res.send(500, err.message);
    }
    	console.log('GET /receipes');
        res.status(200).jsonp(receipes);
    });
};