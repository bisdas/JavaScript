//non streaming,nonblocking
const fs = require('fs');

const callback = function (err, data) {
    if (err) throw err;
    console.log(data);
};
console.log('start')
fs.readFile('./greeter.txt', 'utf8', callback);
console.log('end');