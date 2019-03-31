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