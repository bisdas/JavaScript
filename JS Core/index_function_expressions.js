//Function expression
/**
 * Function can be assigned to a variable.
 * The variable holding function,used for invocation
 */
//syntax 1:
function sayHello(name = 'defaultname') {
    //console.log('Hello',name)
    return `Hello ${name}`
}
const hello = sayHello;
console.log(hello('john'));
//syntax 2:
const hi = function sayHai(name = 'defaultName') {
    //console.log('Hai',name)
    return `Hai ${name}`
};
console.log(hi('John'));
//syntax 3: Anonous function
const greet = function (name = 'Default Name') {
    //console.log('greet');
    return `Greet ${name}`;
};
console.log(greet('John'));
/////////////////////////////////////////////////////////////
//ES 6 Function expression: Arrow functions
/* const hey = () => {
    console.log('Hey')
};
hey(); */
//Function having only single line of body
/* const hey = () => console.log('Hey')
hey(); */
//Function having single arg with default value
/* const hey = (name = 'defaultName') => console.log('Hey', name)
hey(); */
//Function having many args with default value
/* const hey = (name = 'defaultName', message = 'Hey') => console.log(message, name)
hey(); */
//function having single arg without default value
//const hey = name => console.log('hey', name)
//hey('ram');
//function with return statement
/* const hey = () =>{
    return 'Hey'
}
console.log(hey()) */
//function has no body only return
/* const hey = () => 'Hey';
console.log(hey()) */
//function gets one arg without default value,and return the same
const hey = name => name;
console.log(hey('ram'))