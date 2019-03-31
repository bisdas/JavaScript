// let name = 'Bish';
// let age = 25;
// let obj = {
//     name,
//     age
// }

// console.log(obj);
// // object takes the values from declared variables which match the property name.
// // prints: { name: 'Bish', age: 25 }




// let name = 'Bish';
// let age = 25;
// let obj = {
//     name,
//     age,
//     greet(){
//         console.log(this.name, this.age);
//     }
// };

// obj.greet();
// // defining functionn in object literals



// let name = 'Bish';
// let age = 25;
// let obj = {
//     "name": "Bishnu",
//     age,
//     "greet"(){
//         console.log(this.name, this.age);
//     },
//     "greet me"(){
//         console.log("Hello", this.name, this.age);
//     }
// };

// obj["greet"]();
// obj["greet me"]();
// // defining function in object literals with quotes and spaces




let name = 'Bish';
let age = 25;
let [ageField] = "age"; // [ageField] is a dynamic property that creates a real property named 'age'
let obj = {
    "name": "Bishnu",
    [ageField]: 26,
    "greet"(){
        console.log(this.name, this.age);
    },
    "greet me"(){
        console.log("Hello", this.name, this.age);
    }
};


console.log(obj);
console.log(obj[ageField]);
// dynamic properties