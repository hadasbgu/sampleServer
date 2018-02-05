var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/' , function(req, resp){
	resp.cookie('myFirstCookie', 'looks good');

	resp.end('WoW! cookie!');
});


app.get('/removeCookie' , function(req, resp){
	resp.clearCookie('myFirstCookie');

	resp.end('no cookie now =/');
});



app.listen(1337, function(){
	console.log('listening 1337');
})