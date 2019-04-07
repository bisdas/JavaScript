//Back presure

const fs = require('fs');

/*const readerStream = fs.createReadStream('./big.file', 'utf8');
const writeStream = fs.createWriteStream('./bigfileCopy.txt');
let data=''
//read operation
readerStream.on('data', function (chunk) {
    const buffer_good = writeStream.write(chunk);
    if (!buffer_good) readerStream.pause();

})
writeStream.on('drain', function () {
    console.log('buffer drained!');
    readerStream.resume();
});

readerStream.on('end', function () {
    console.log('end is called');
});
*/

const readable = fs.createReadStream('./big.file');
const writable = fs.createWriteStream('./filecopy.txt');

//short approach
//all the data from readable goes into writable (filecopy.txt)
readable.pipe(writable);