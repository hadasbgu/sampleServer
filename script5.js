// NodeJS Tutorial 5: Creating Simple Server - Part 2


var http = require('http');



server.createServer(engine).listen(1337); // leets

function engine(request, response){

	response.writeHead(200, {'Content-Type': 'text/plain', 'blablabla': 'cool man'});
	response.end('Hey, I am server :D ');
	
}