const http = require('http');


//create Server
//callback/requestListener function:it is called for every
// client request
const callback = function (req, res) {
    res.write('Hello Node Web');
    res.end();
}
const server = http.createServer(callback);

server.on('request', function (req, res) {
    console.log(`Request is received on ${new Date().toLocaleTimeString()}`)
})

//Start the server
server.listen(8080, function () {
    console.log('Server is Ready!');
})