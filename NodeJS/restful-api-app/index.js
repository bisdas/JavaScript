/*
*   primary file for the API
*/


// Dependencies
const http = require('http'); // built in node module related to http operations
const url = require('url'); // built in node module related to url 

// the server should respond to all requests with a string
const server = http.createServer(function (request, response) {
    console.clear();
    
    //get the url and parse it
    //console.log('Request URL', request.url);
    const parsedUrl = url.parse(request.url, true);

    
    //get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');


    // get the request method
    const method = request.method.toLowerCase();
    

    //get the querystring parameters
    const queryStringObject = parsedUrl.query;
    
    
    // send the response
    response.end('Hello World...!');
    

    //log the request data
    console.log('Request path: ', trimmedPath);
    console.log('Request method: ', method);
    console.log('Request quertstring: ', queryStringObject);
});

// the server should log whena request arrives
server.on('request', function (request, response) {
    //console.log('Request received with URL', request.url);
});

// the server should listen to port 3000
server.listen(3000, function () {
    console.log('Server listening on port: 3000');
});
