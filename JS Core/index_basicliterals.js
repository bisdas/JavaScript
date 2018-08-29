//literals
/**
 * string
 *   - ""
 *   - ''
 *   - `` - string template liteal -es6
 * **/
var name = "Subramanian";
// console.log("My Name" + name);
//console.log("myName",name);
console.log(`My Name is ${name}`);
/* let html = "<html>"+
           "<head>"+
           "</head>" */
let html = `<html>
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <h1>Hello</h1>
                </body>
           </html>
           `;
console.log(html);
let domain = "google.com";
let url = `http://www.${domain}`;

//number: 64 bit double
let price = 1000;
console.log(`Price is ${price}`);

//boolean
let isActive = true;
console.log(`IsActive ${isActive}`);

//undefined: variable is declared but dont have been initalzed with valid literals
let tax;
console.log(`Tax ${tax}`);

//NaN: Not a Number: Error Code in code.
let totalTax = (tax * 10) / 100;
console.log(totalTax);

let avgSalary = 1000 / 0;
console.log(`Avg Salary ${avgSalary}`);