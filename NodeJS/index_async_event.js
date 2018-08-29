//Event Driven Programming
const EventEmitter = require('events');

const inventory = {
    update: function (desc) {
        console.log(desc)
        console.log('store has been updated! Thanks!')
    }
}
//Owner
class Car extends EventEmitter {
    constructor() {
        super();
        this.name = 'Alto'
        this.status = false;
        this.on('sold', function (e) {
            // asynchronous event
            setTimeout(() => {
                console.log('this happens asynchronously');
                inventory.update(e);
            }, 0);
           
        });
    }
    //api 
    sale(desc) {
        this.status = !this.status;
        if (this.status) {
            //trigger event
            this.emit('sold', desc)
        }
    }
}
let car = new Car();
car.sale({
    id: 1,
    name: 'benz',
    price: 100000,
    qty: 1
});