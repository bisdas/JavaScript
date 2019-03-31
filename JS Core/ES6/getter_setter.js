class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        if(value.length > 2){
            this._name = value;
            console.log('name is updated');
        }
        else{
            console.log('Rejected! Name should be of at least 3 characters');
        }
    }
}

let person = new Person('Bish');
console.log(person.name);
person.name = 'Bi';
person.name = 'Bis';
console.log(person.name);

console.log(person);


// there is no true protection though.
// the private member is always directly acessible even though a setter is set up.
person._name = 'Bishnu';
console.log(person);