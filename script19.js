// ExpressJS Tutorial 18: GET Method
// codedamn

var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser());


// express wait for the user to enter a URL
app.get('/',function(req,resp){
	resp.sendFile('hello.html', {root:path.join(__dirname, './client')});

})


app.post('/',function(req,resp){

	resp.end(JSON.stringify(req.body));

})



app.listen(1337, function(){
	console.log('listening on port 1337');
});
