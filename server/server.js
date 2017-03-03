var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
	res.header('Access-Control-Allow-Headers', "Content-Type");
	next();
})
/**************************************/

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cookbook', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});
require('./models/comment');
require('./models/user');
require('./models/receipe');
require('./models/category');

/**************************************/

var api = express.Router();
var commentsCtrl = require('./controllers/comments');
var usersCtrl = require('./controllers/users');
var receipesCtrl = require('./controllers/receipes');
var categoriesCtrl = require('./controllers/categories');

/*router.get('/', function(req, res) {  
   res.send("Hello World!");
});
*/

api.route('/comments')  
  .get(commentsCtrl.findAllComments);

api.route('/users')  
  .get(usersCtrl.findAllUsers);

api.route('/receipes')  
  .get(receipesCtrl.findAllReceipes)
  .post(receipesCtrl.addRecipe);

api.route('/categories')  
  .get(categoriesCtrl.findAllCategories);

app.use(api);

