const fs = require('fs');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}


const bookJSON = JSON.stringify(book)
//fs.writeFileSync("1-json.json", bookJSON);


const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title)





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



