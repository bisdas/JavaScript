//nonblocking,streaming

const fs = require('fs');

//All streamings are event driven
const options = {
    encoding: 'utf8'
}

const IStream = fs.createReadStream('./big.file', options);

//Registering events
let data = ''
IStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length}`);
    //data += chunk;
    console.log(chunk)
})
IStream.on('end', function () {
   // console.log(data)
})