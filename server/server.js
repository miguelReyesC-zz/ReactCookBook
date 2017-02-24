var express = require('express');
var app = express();
var bodyParser  = require("body-parser");
var methodOverride = require("method-override");

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

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

/**************************************/

var api = express.Router();
var commentsCtrl = require('./controllers/comments');

/*router.get('/', function(req, res) {  
   res.send("Hello World!");
});
*/

api.route('/comments')  
  .get(commentsCtrl.findAllComments);

app.use(api);

