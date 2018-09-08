const fs =require('fs');


//blocking aoi
console.log('start')
//const data=fs.readFileSync('./greeter.txt');
//console.log(data);

const data=fs.readFileSync('./greeter.txt','UTF8');
console.log(data);
console.log('end');