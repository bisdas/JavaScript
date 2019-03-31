let obj = {
    name: 'Bish',
    age: 25,
    greet: function(){
        console.log('Hello there!')
    }
}


// // scenario 1
// let {name, age} = obj;
// // for destructuring objects, curly braces needs be used.
// console.log(name);
// console.log(age);



// // scenario 2
// let {name, , greet}
// // this throws error because destructing objects does not allow skipping,
// // object destructing is based on the property names, but not the order.




// // scenario 3
// let {name, greet} = obj;
// greet();
// // this works, because in object destructuring properties are resolved by names,
// // hence sequence does not matter. just the names has to match.


// // scenario 4
// // it is possible to have the destructured property to have a different name than the property inside the object.
// // for that we user the 'colon (:)' to give it a different name or alias
// // once an alias is used, we can't use the property with the original name, but only the alias.
// let {name: myName, greet: sayHello} = obj;
// console.log(name) // error, name is not defined
// console.log(myName); // works fine
// greet(); // error. greet is not defined
// sayHello(); // works fine






