//write blocking api

const fs = require('fs');
const data = 'Hello!';
console.log('start')
fs.writeFileSync('./hello.txt', data, 'utf8');
console.log('end');