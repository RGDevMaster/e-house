//startup file

var http = require('http');
var express = require('express'); 

var server = http.createServer(function(request, response) {
	console.log(request);
	response.writeHead(200, { "content-type" : "application/json"}); 
	var contentJson = JSON.stringify({ a : 1});
	response.end(contentJson); 
}); 

server.listen(9000,'localhost'); 

console.log("server running "); 
 
