const http = require('http');
const USERS = require('./mock-data/profiles');

//Sending JSON data
const callback = function (req, res) {
    const payload = JSON.stringify(USERS);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.write(payload);
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