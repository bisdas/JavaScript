//functions declaration

function sayHello() {
    console.log('Hello');
}
//invoking
sayHello();
//Parameters and args
function sayHai(name = 'defaultName') {
    console.log(` Name is ${name}`)
}
//'Ram' is parameter,type of parameter is string
//Note: parameter type can be any literal
sayHai('Ram');
sayHai(); //undefined
function multiply(a = 1, b = 1) {
    //const result = (a || 1) * (b || 1);
    const result = a * b;
    console.log(result);
}
//multiply(10, 9);
multiply();

// || : if first operand is true , the result will be first itself else result would be second.

//Rest Operator,Var args
function logger(name, ...mylogger) {
    //console.log(arguments);
    console.log(name, mylogger);
}
logger('MyApp', 'Hello')
logger('MyApp', 'Hello', 'Hai')
logger('MyApp', 'test', 3, 5, 6, 7, 8, 90, 786, 7)
///////////////////////////////////////////////////////////
//return: you can return any literal
function add() {
    return 10 + 10;
}
console.log(add());

function isValid(userName = '') {
    if (userName === 'admin') {
        return true;
    }
    return; // undefined
}
const logIn = isValid('admin') ? 'Login Success' : 'Login Failed';
console.log(logIn);