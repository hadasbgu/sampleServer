var express = require('express');
var mysql = require('mysql');
var app = express();

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

app.get('/',function(req,resp){
	//about mysql
	connection.query("SELECT * FROM sampletable", function(error,rows, fields){
		// callback function
		if(error){
		console.log('Error in query');
		} else {
			console.log('Success!\n');
			console.log(rows);
			resp.send("Hello, " + rows[1].name + " :-*");
			// resp.json(rows);
		}
	});
})

app.listen(1337);
