//Data initalzation
/**
 * 1.hardcoded way
 * 2.through constructor parameters
 * 3.after object creation
 */

function Employee(id = 1, name = 'Subramanian') {
    //instance variables
    this.id = id; //1;
    this.name = name; // 'Subramanian';
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    }
}
const emp = new Employee(1, 'ram');
emp.name = 'John'
console.log(`Id ${emp.id}`);
console.log(`Name ${emp.name}`);
console.log(`Salary ${emp.calculateSalary()}`);

const emp1 = new Employee();
emp1.name = 'ram'
console.log(`Id ${emp1.id}`);
console.log(`Name ${emp1.name}`);
console.log(`Salary ${emp1.calculateSalary()}`)
////////////////////////////////////////////////////////////
class Customer {
    constructor(id = 1, name = 'subramanian') {
        this.id = id; //1;
        this.name = name; // 'Subramanian';
    }
    calcualteTax() {
        return 100 * 10 / 100;
    }
}
//console.log(Customer)->Function object
const cust = new Customer();
cust.name = 'karthik'
console.log('Customer Details');
console.log(`id ${cust.id}`);
console.log(`name ${cust.name}`);
console.log(`Tax ${cust.calcualteTax()}`);
//////////////////////////////////////////////////////////////
const order = new Object();
order.id = 1;
order.name = 'Beauty Products';
order.updateStock = function () {
    return 'Stock updated'
}
console.log(`Order Details`);
console.log(order.id, order.name, order.updateStock());

//liteal pattern
const product = {
    id: 1,
    name: 'Car',
    sale: function () {
        return `${this.name} has been sold`
    }
}
product.name = 'Bus'
console.log('Product details')
console.log(`Product Id ${product.id}`);
console.log(`Product Name ${product.name}`);
console.log(`Sales ${product.sale()}`);