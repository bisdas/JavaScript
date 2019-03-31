const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSONString = dataBuffer.toString()
const dataObject = JSON.parse(dataJSONString)

dataObject.name = 'Bishnu'
dataObject.age = 28

console.log(dataObject)
fs.writeFileSync('1-json.json', JSON.stringify( dataObject))


/* ---------- Simple JSON stringifying and Parsing ----------*/
// //printing the object
// console.log(book);

// // convert a JS object to JSON
// const bookJSON = JSON.stringify(book);

// //printing the strigified JSON object
// console.log(bookJSON);
// console.log(book["title"], book["author"]);

// const bookObject = JSON.parse(bookJSON);

// // printing the parsed object from JSON string
// console.log(bookObject);
// console.log(bookObject.title, bookObject.author);


/* -------------------------------------------------------------*/



