class Person{
    constructor(name){
        //this.name = 'Bish';
        this.name = name;
    }

    sayHello(){
        console.log('Hello I\'m ' + this.name + ' and I\'m ' + this.age);
    }
}

let person = new Person('Bish');
//person.sayHello();

class Bis extends Person{
    constructor(){
        //console.log('Awesome');
        super('Bish'); // super() must be called in sub class's constructor, before using 'this'.
        this.age = 27;
    }

    sayHello(){
        console.log('Hello again, ' + this.name);
    }

    sayHelloAgain(){
        super.sayHello();
        this.sayHello();
    }
}

let bis = new Bis();
//bis.sayHello();
bis.sayHelloAgain();

