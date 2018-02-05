// ExpressJS Tutorial 15: Serving Static Files
// codedamn

var express = require('express');
var path = require('path');
var app = express();


// express wait for the user to enter a URL
app.get('/',function(req,resp){
	resp.sendFile('index.html', {root:path.join(__dirname, './client')});

})

app.listen(1337, function(){
	console.log('listening on port 1337');
});
