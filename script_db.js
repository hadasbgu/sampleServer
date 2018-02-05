// NodeJS + MySQL Database Connection Tutorial
// codedamn
// https://www.youtube.com/watch?v=hGZX_SA7lYg

var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.static(__dirname + '/client'));

var connection = mysql.createConnection({
// properties...
	// connnectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '123456',//'123456'
    database: 'sampledb',
});


connection.connect(function(error){
	//callback
	if(error){
		console.log('Error');
	} else {
		console.log('Connected');
	}
})

// express wait for the user to enter a URL
app.get('/',function(req,resp){
	 try {
        resp.redirect('index.html');
    } catch (e) {
        console.log("Can't get Index file" );
        resp.status(404).send();
    }

})

app.listen(1337, function(){
	// console.log('listening');
});
