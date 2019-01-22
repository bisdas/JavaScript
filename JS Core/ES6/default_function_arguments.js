// // scenario 1
// function isEqualTo(number, compare){
//     return number == compare;
// }

// console.log(isEqualTo(10, 10));
// // this returns true as expected.


// //scenario 2
// function isEqualTo(number, compare = 0){
//     return number == compare;
// }

// console.log(isEqualTo(10));
// // returns false, because the default value of compare is 0, and
// // value of number is 10. the parameter supplied is passed to the
// // first argument.


// // scenario 3
// function isEqualTo(number, compare = 10){
//     return number == compare;
// }

// console.log(isEqualTo(10));
// // returns true, because the default value of compare is 10, and
// // value of number is 10. the parameter supplied is passed to the
// // first argument.



// // scneraio 4
// function isEqualTo(number = 10, compare){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo(10));
// // returns false, because the default value of compare is 10, and
// // the value of number passes as argument is also 10. the parameter
// // supplied overwrites the default value 10.
// // for the second argument there is no default value, which is undefined.
// // so comparing a number to 'undefined' results to false.


// // scneraio 5
// function isEqualTo(number = 10, compare = 10/2){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo(10));
// // returns false, because the default value of compare is 10/2 == 5. and
// // the value of number passed as argument is 10. the parameter
// // supplied overwrites the default value 10.



// // scneraio 6
// function isEqualTo(number = 10, compare = number){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo(11));
// // returns true, because the default value of compare is
// // always equal to number.



// // scneraio 7
// function isEqualTo(number = 10, compare = number){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo(11, 12));
// // returns false, because now 'compare' gets a different value
// // as argument



// // scneraio 8
// let a = 100;
// function isEqualTo(number = 10, compare = a){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo());
// // returns false, because now compare gets a different value
// // from variable 'a'



// //scneraio 9
// function isEqualTo(number = compare, compare = 10){
//     console.log(number);
//     console.log(compare);
//     return number == compare;
// }

// console.log(isEqualTo());
// // results in 'ReferenceError: compare is not defined'.
// // because, compare does not exist while assigning to number



