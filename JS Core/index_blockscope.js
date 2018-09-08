sayHello()

function sayHello() {
    console.log('Hello')
}
//sayHello();
//greeter();
let greeter = function () {
    console.log('greeter');
}
//greeter();

function sayMyName(isActive) {
    var name = 'ram';
    if (isActive) {
        let status = 'You are active'
        console.log(status);
    }
    //console.log(status);
}
sayMyName(true);
//console.log(name); function scope
