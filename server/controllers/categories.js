var mongoose = require('mongoose');  
var Categories  = mongoose.model('Categories');

exports.findAllCategories = function(req, res) {  
    Categories.find(function(err, categories) {
    if(err){
    	res.send(500, err.message);
    }
    	console.log('GET /categories');
        res.status(200).jsonp(categories);
    });
};