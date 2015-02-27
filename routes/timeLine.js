// Get all of our friend data

var data = require('../data.json');

exports.addTimeLine = function(req, res) { 
	// Your code goes here
  var current = req.query.time.split("z");
  var timestamp = current[0]+" "+current[1]+" "+current[2]+" "+current[3]+" at "+current[4];
  var newEntry = 
	{
		'name': req.query.face,
		'imageURL': req.query.image_url,
		'description': req.query.description,
		'date' : timestamp,
	}
	;

	console.log("New Entry has been added:");

	console.log(newEntry);
	
	data["emotions"].push(newEntry);
	
	res.render('timeLine', data);

       

}

/*
exports.view = function(req, res){
	console.log(data);
	res.render('timeLine', data);
};
*/



