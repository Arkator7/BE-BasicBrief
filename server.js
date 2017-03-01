var express = require('express');
var app = express();

var root = "/materials/";
			
var csv_file_location = root;// + "Australian_Post_Codes_Lat_Lon.csv";

app.use('/', express.static('BE-BasicBrief'))
	
app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html");
})

// This responds with "Hello World" on the homepage
app.get('/materials', function (req, res) {
   console.log("Got a GET request for the materials folder");
   res.send('Hello GET');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
	   
   console.log("Example app listening at http://%s:%s", host, port)
})