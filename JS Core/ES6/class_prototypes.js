class Person{
    constructor(name){
        //this.name = 'Bish';
        this.name = name;
    }

    sayHello(){
        console.log('Hello ' + this.name);
    }
}

let person = new Person('Bish');
person.sayHello();


console.log(Person); // [Function: Person]
console.log(person); // Person { name: 'Bish' }
console.log(person.__proto__); // Person {}
console.log(person.__proto__ == Object); // false
console.log(person.__proto__ == Object.prototype); // false
console.log(person.__proto__ == Function.prototype); // false
console.log(person.__proto__ == Person.prototype); // true
