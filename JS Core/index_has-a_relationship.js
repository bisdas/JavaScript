//has-a

class Order {
    constructor(id = 'A001', invoice = 0) {
        this.id = id;
        this.invoice = invoice;
    }
}
class Customer {
    constructor(id = 1, name = 'defaultName', order = new Order()) {
        this.id = id;
        this.name = name;
        //has-a
        this.order = order;
    }
}
let customer = new Customer(9, 'Ram', new Order('b001', 5600));
console.log(`Customer ID ${customer.id}`);
console.log(`Customer Name ${customer.name}`);
console.log(`Customer order details ${customer.order.id} ${customer.order.invoice}`);

//has-a
const order = {
    id: 1,
    product: {
        id: 'P',
        item: {
            name: 'phone'
        }
    }
}
console.log(order.product.item.name)