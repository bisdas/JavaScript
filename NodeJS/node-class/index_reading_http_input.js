const http = require('http');


//Reading client Input
const callback = function (req, res) {
   /*  let data = '';
    req.on('data', function (chunk) {
        data += chunk;
    })
    req.on('end', function () {
        console.log(data);
        res.write(data.toUpperCase());
        res.end();
    }); */
    req.pipe(res);

}
const server = http.createServer(callback);

server.on('request', function (req, res) {
    console.log(`Request is received on ${new Date().toLocaleTimeString()}`)
})

//Start the server
server.listen(8080, function () {
    console.log('Server is Ready!');
})