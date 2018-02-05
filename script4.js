// NodeJS Tutorial 4: Creating Simple Server - Part 1
// NodeJS Tutorial 5: Creating Simple Server - Part 2
// https://www.youtube.com/watch?v=Prl7tVSgZrY&index=5&list=PLYxzS__5yYQmHbpKMARP04F344zYRX91I


var server = require('http');


server.createServer(engine).listen(1337); // leets

function engine(request, response){

	response.writeHead(200, {'Content-Type': 'text/plain', 'blablabla': 'cool man'});
	response.end('Hey, I am server :D ');
	
}