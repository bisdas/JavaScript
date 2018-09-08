function greeter(greetMe) {
    //delegator api
    setTimeout(function () {
        greetMe({
            message: 'HelloS'
        })
    }, 1000);

}

//Handler function,to be invoked
const callback = function (response) {
    console.log('I am delayed Person', response)
};

console.log('start')
greeter(callback);
console.log('end');

greeter(function (response) {
    console.log('New Greeter', response)
})