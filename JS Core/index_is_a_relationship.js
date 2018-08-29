function Employee() {

}
Employee.prototype.id = 1;

let emp1 = new Employee();
//emp1.id =1;
emp1.id = 90;
console.log(emp1.id)


let emp2 = new Employee();
console.log(emp2.id);
/////////////////////////////////////////////////////////////
/* function Animal() {
    this.name = 'animal'
    this.eat = function () {
        return 'animal eats'
    }
}

function Dog() {
    this.eat = function () {
        return 'dog eats'
    }
}
let dog = new Dog();
dog.__proto__ = new Animal();

console.log(dog);
dog.name = 'puppy'
//js looks property in current object,if not there it will lookp its parent,its parent
console.log(dog.name); // lookup
console.log(dog.food);
console.log(dog.eat()); */

//es 6 inhertiance

class Animal {
    constructor(name = 'animal') {
        this.name = name;
        console.log('animal constructor runs')
    }
    eat() {
        return 'animal eats!'
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        console.log('dog constructor runs')
    }
    eat() {
        return 'dog eats!' + super.eat();
    }
}
let dog = new Dog('dog');
//dog.name = 'dog'
console.log(dog.name);
console.log(dog.eat())