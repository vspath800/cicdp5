var http = require('http');
var handleRequest=function(request,response){
	response.writeHead(200);
	response.end("<h1> Welcome to cloud build using CICD GKE automated pipeleine</h1>");
}
var www=http.createServer(handleRequest);
www.listen(8080);
