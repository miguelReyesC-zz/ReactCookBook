var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var receipeSchema = new Schema({
	recipeName:   { type: String },
	category:     { type: String },
	chef: 		  { type: String },
	preparation:  { type: String },
	ingredients : []

});

module.exports = mongoose.model('Receipes', receipeSchema); 