const fs = require('fs');

const writeStream = fs.createWriteStream('./output.txt', 'utf8');
const data = 'Welcome to Node Writter';
writeStream.write(data);
writeStream.end();


writeStream.on('finish', function () {
    console.log("Write completed.");
});

writeStream.on('error', function (err) {
    console.log(err.stack);
});