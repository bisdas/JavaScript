const {
    add,
    substract,
    multiple
} = require('./calculate');
const Employee = require('./Employee');

let employee = new Employee();
console.log(`Salary : ${employee.calculateSalary()}`);
employee.getEmployees().forEach((emp,index)=>{
    console.log(`${emp.id} -  ${emp.name}`);

})

console.log(` Addtion -> ${add(1, 1)}`)
console.log(`Substract -> ${substract(10, 2)}`)
console.log(`Multiply -> ${multiple(45, 9)}`)