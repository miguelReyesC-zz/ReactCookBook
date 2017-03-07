var mongoose = require('mongoose');  
var Receipes  = mongoose.model('Receipes');

exports.findAllReceipes = function(req, res) {  
	console.log("GET");
    Receipes.find(function(err, receipes) {
    if(err){
    	res.send(500, err.message);
    }
    	console.log('GET /receipes');
        res.status(200).jsonp(receipes);
    });
};

exports.addRecipe = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var recipe = new Receipes({
        recipeName: 	req.body.recipeName,
		category: 		req.body.category,
		chef: 			req.body.chef,
		preparation: 	req.body.preparation,
		ingredients : 	req.body.ingredients
    });

    recipe.save(function(err, recipe) {
    if(err) {
    	return res.status(500).send(err.message);
    }
    res.status(200).jsonp(recipe);
    });
};

exports.findRecipeById = function(req, res) {  
    Receipes.findById(req.params.id, function(err, recipe) {
    if(err){
        res.send(500, err.message);
    }

    console.log('GET /recipe/ by id' + req.params.id);
        res.status(200).jsonp(recipe);
    });
};