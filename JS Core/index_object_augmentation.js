const employee = {
    id: 1
};
//Add new property
employee.name = 'Subramanian';
//Update existing Property: 
// if prop exits update,else add
employee.id = 90;
employee.salary = 100;
employee.department = 'Training'
//delete
delete employee.department;

//console.log(employee);
//iterate
for (let emp in employee) {
    console.log(emp, employee[emp]);
}



class Customer {

}

let cust = new Customer();
cust.id = 1;
console.log("Cust", cust);

let cust2 = new Customer();
cust2.address = "Bangalore";
console.log("Cust2", cust2);



function Order() {

}
let order = new Order();
order.value = 99999;
console.log(order);