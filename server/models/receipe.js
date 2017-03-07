var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var receipeSchema = new Schema({
	recipeName:   { type: String },
	category:     { type: String },
	chef: 		  { type: String },
	preparation:  { type: String },
	ingredients:  [ ingredientSchema ]
});

var ingredientSchema = new Schema({
	name:         { type: String },
	quantity:     { type: String }
});

module.exports = mongoose.model('Receipes', receipeSchema); 