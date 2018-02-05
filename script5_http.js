// NodeJS Tutorial 5: Creating Simple Server - Part 2

var http = require('http');
var server = http.createServer(engine);

// everytime the server recives a request the function happens
server.listen(1337, function(){
		console.log('server was hit by a request');

}); 


function engine(request, response){

	// console.log(response)
	response.writeHead(200, {'Content-Type': 'text/plain', 'blablabla': 'cool man'});
	response.end('Hey, I am server :D request from page: ' + request.url);
	
}