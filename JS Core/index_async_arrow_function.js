const sayGreet = (callback, timer = 100) => setTimeout(() => {
    callback({
        mssage: `Hello with ${timer} ms`
    });
}, timer);
console.log('start')
const cb = response => console.log(response);
sayGreet(cb, 1000);
sayGreet(response => console.log('9',response), 900);
//delegate->event queue->loop->stack-sf
sayGreet(response => console.log(response), 0);
sayGreet(response => console.log(response),900);

console.log('end')