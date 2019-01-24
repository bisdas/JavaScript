
let numbers = [1, 2, 3];

// // simple destructuring
// let [a, b] = numbers;
// // a = 1, b = 2
// console.log(a);
// console.log(b);


// // using additional variables. extra variables get undefined value.
// let [a, b, c, d] = numbers;
// console.log(d);


// // using spread operator with destructuring
// let [a, ...b] = numbers;
// // here 'b' becomes an array with rest of the elements in the 'numbers' array.
// console.log(a);
// console.log(b);


// // using default values
// let [a, b, c = 10] = numbers;
// let [a = 'Default', b, c = 10] = numbers;
// console.log(a);
// console.log(c);


// //swaping values using destructuring
// let a = 5;
// let b = 10;

// [b, a] = [a, b];
// console.log(a, b);



// skiping an element in destructuring
let [a,,b] = numbers;