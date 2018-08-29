const EMPLOYEES = require('./employee-mock');

class Employee {
    constructor() {
        this.id = 1;
        this.name = 'Ram'
    }
    getEmployees() {
        return EMPLOYEES;
    }
    calculateSalary() {
        return 10 * 1000;
    }
    calcualteBouns() {
        return 5 * 50;
    }
    calcualteLeave() {
        return 10 * 3;
    }
}
module.exports = Employee; 