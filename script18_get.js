// ExpressJS Tutorial 18: GET Method
// codedamn

var express = require('express');
var path = require('path');
var app = express();


// express wait for the user to enter a URL
app.get('/',function(req,resp){
	// resp.end(JSON.stringify(req.query));
	// if we type http://127.0.0.1:1337/?firstname=leonides&shout=this is sparta
	
	// get
	var response = "hello, " + req.query.firstname + "!";
	resp.end(response);

	//post


})

app.listen(1337, function(){
	console.log('listening on port 1337');
});
