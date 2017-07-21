var friendData = require ("../data/friends.js");
var path = require( "path");

module.exports = function (app){

	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});
 

	app.post("/api/friends", function(req, res){
		console.log(req.body);
		
		    var bestFriend = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        //Loop through friends object
        for (var i = 0; i < friendData.length; i++) {

            totalDifference = 0;

            //Loop through the scores of each friend
            for (var j = 0; j < friendData[i].scores[j]; j++) {
                //calculating the difference between each score and sum them into totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

                //Find best friend match
                if (totalDifference <= bestFriend.friendDifference) {

                    bestFriend.name = friendData[i].friendName;
                    bestFriend.photo = friendData[i].photo;
                    bestFriend.friendDifference = totalDifference;

                }
            }
        }

        //Pushing new friend to friends API
        friendData.push(userData);

        res.json(bestFriend);
        console.log(bestFriend);
    });

}		

		// var currentFriend = req.body;
		// var newScores = currentFriend.scores;
		// var matchName = "";
		// var matchImage = "";
		// var totDiff = 1000;


		// for (var i = 0; i < friendData.length; i++){
		// 	var diff = 0;
		// 	for ( var j = 0; j < newScores.length; j++){
		// 		diff += Math.abs(friendData[i].scores[j] - newScores[j]);
		// 	}

		// 	if (diff < totDiff){
		// 		totDiff = diff;
		// 		matchName = friendData[i].friendName;
		// 		matchImage = friendData[i].photo;
		// 	}
		// 	friendData.push(currentFriend);
		// 	res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
		// }
		
	//})
//} 


//1) create empty object

// res.json(match);

//add up all scores, subtract 