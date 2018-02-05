var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session')

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(sessions({
	secret: '3%$$#^#%^$^@#$^$^%fgfgrtrt',
	resave: false,
	saveUninitialized: false
}));

app.get('/login',function(req,resp){
	session = req.session;
	if (session.uniqueID){
		resp.redirect('/redirects');
	}
	resp.sendFile('./client/login.html', {root: __dirname});
})

app.post('/login',function(req,resp){
	// resp.end(JSON.stringify(req.body));
	session = req.session;
	if (session.uniqueID){
		resp.redirect('/redirects');
	}

	session.uniqueID = req.body.username;
	resp.redirect('/redirects');
});

app.get('/logout', function(req,resp){
	req.session.destroy();
	resp.redirect('/login');	
});

app.get('/admin', function(req,resp){
	resp.end('you are god.');
});


app.get('/redirects', function(req,resp){
	session = req.session;

	if (session.uniqueID == 'admin'){
		console.log(session.uniqueID);
		resp.redirect('/admin')
	} else {
		resp.send(req.session.uniqueID + ' who are you <a href="/logout">KILL SESSION</a>');
	}
})




app.listen(1337, function(){
	console.log('listening on port 1337');
});
