var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var categorySchema = new Schema({
  _id: 		   { type: String },
  comment:    { type: String }
});

module.exports = mongoose.model('Categories', categorySchema); 