/*
*   primary file for the API
*/


// Dependencies
const http = require('http');


const server = http.createServer(function (request, response) {
    response.end('Hello World...!');
})

server.listen(3000, function () {
    console.log('Server is now listening on port 3000');
})
