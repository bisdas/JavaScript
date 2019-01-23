let numbers = [1,2,4,5];
console.log(Math.max(numbers));  // returns NaN becasue Math.mac expects a list of numbers, not an array


//to convert the array to a list of numbers use the spread operator
console.log(Math.max(...numbers));