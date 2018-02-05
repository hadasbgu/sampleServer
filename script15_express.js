// ExpressJS Tutorial 15: Serving Static Files
// codedamn

var express = require('express');
var app = express();


// express wait for the user to enter a URL
app.get('/helloThere',function(req,resp){
	resp.send("hello there, from express!");

})

app.listen(1337, function(){
	console.log('listening on port 1337');
});
