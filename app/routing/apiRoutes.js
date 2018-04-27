var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var highlander = require("../data/highlander.js");

module.exports = function (app) {
    //get rout with URL /api/friends to display JSON of friends
    app.get("/api/highlander", function (req, res) {
        res.json(highlander);
    });


    // post routes /api/friends takes incoming survey results and compatability logic
    app.post("/api/highlander", function (req, res) {

        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options
        var bestMatch = {
            name: "",
            photo: "",
            highlanderDifference: 1000
        };

        // Here we take the result of the user"s survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        // This variable will calculate the difference between the user"s scores and the scores of
        // each user in the database
        var totalDifference = 0;

        // Here we loop through all the friend possibilities in the database.
        for (var i = 0; i < highlander.length; i++) {

            console.log(highlander[i].name);
            totalDifference = 0;

            // We then loop through all the scores of each friend
            for (var j = 0; j < highlandser[i].scores[j]; j++) {

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(highlander[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.highlanderDifference) {

                    // Reset the bestMatch to be the new friend.
                    bestMatch.name = highlander[i].name;
                    bestMatch.photo = highlander[i].photo;
                    bestMatch.highlanderDifference = totalDifference;
                }
            }
        }

    friends.push(userData);

    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(bestMatch);

    });
}