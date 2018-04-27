var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var puppies = require ("../data/highlander.js");

module.exports = function(app){
//get rout with URL /api/friends to display JSON of friends
app.get("/api/highlander", function(req, res) {
   res.json(highlander);
 });


// post routes /api/friends takes incoming survey results and compatability logic
app.post("/api/highlander", function(req, res) {
   // req.body hosts is equal to the JSON post sent from the user
   // This works because of our body-parser middleware
   var newHighlander = req.body;
 
   console.log(newHighlander);
 
   // We then add the json the user sent to the character array
   highlander.push(newHighlander);
 
   // We then display the JSON to the users
   res.json(newHighlander);
 });
 
};