/*
*   primary file for the API
*/


// Dependencies
const http = require('http'); // built in node module related to http operations
const url = require('url'); // built in node module related to url 
const StringDecoder = require('string_decoder').StringDecoder; // built in node module to decode strings

// the server should respond to all requests with a string
const server = http.createServer(function (request, response) {
    console.clear();
    console.log("Request Time:", (new Date).toString());

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


    //get the request headers
    const headers = request.headers;


    //reading the payload
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    request.on('data', function (data) {
        console.log('Data received:', data);
        buffer += decoder.write(data);
    });

    request.on('end', function () {
        console.log('Data end:', decoder.end());
        buffer += decoder.end();
        // send the response
        response.end('Hello World...!');
        console.log('Request payload: ', buffer);
    });


    //log the request data
    console.log('Request path: ', trimmedPath);
    console.log('Request method: ', method);
    console.log('Request quertstring: ', queryStringObject);
    console.log('Request headers: ', headers);
});

// the server should log whena request arrives
server.on('request', function (request, response) {
    //console.log('Request received with URL', request.url);
});

// the server should listen to port 3000
server.listen(3000, function () {
    console.log('Server listening on port: 3000');
});
