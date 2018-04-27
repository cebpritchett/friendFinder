var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path")

module.exports = function(app){
//get route to display survey page
app.get("/survey", function(req, res) {
   res.sendFile(path.join(_dirname, "/../public/survey.html"));
 });


//default route that leads to home.html to display homepage

app.use(function(req, res) {
   // res.send
   res.sendFile(path.join(__dirname, "/../public/home.html"));
 
//app.get("/", function(req, res) {

 });
};