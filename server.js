//function getCSV(csv_file_location) {
	var express = require('express');
	var app = express();

	var root = "materials/";
			
	var csv_file_location = root + "Australian_Post_Codes_Lat_Lon.csv";

//	app.use('file:///C:/Users/Ricky/Desktop/codingFile/BE-BasicBrief', express.static(path.join(__dirname, 'public')))
	app.use('file:///C:/Users/Ricky/Desktop/codingFile/', express.static('BE-BasicBrief'));
	
	// This responds with "Hello World" on the homepage
	app.get(csv_file_location, function (req, res) {
	   console.log("Got a GET request for the homepage");
	   res.send('Hello GET');
	})

	var server = app.listen(8081, function () {
	   var host = server.address().address
	   var port = server.address().port
	   
	   console.log("Example app listening at http://%s:%s", host, port)

	})

//}