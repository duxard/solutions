
//ES5
function Animal(age){
    this.age = age;
}

Animal.prototype.getAge = function(){
    return this.age;
}

function Dog(age, name){
    Animal.apply(this, arguments);
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log( "woof!" );
}
Dog.prototype.getName = function(){
    return this.name;
}


//ES6
class Animal {
    constructor(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

class Dog extends Animal {
    constructor(age, name){
        super(age);
        this.name = name;
    }
    bark(){
        console.log("Woof!");
    }
    getName(){
        return this.name;
    }
}

//usage
let dog = new Dog(10, "Lessy");
console.log( Animal.prototype.isPrototypeOf(Dog.prototype) );  //true
console.log( dog instanceof Animal );  //true
console.log( dog.__proto__ ) // Animal


// Array-driven type
class MyArray extends Array {
    constructor(...args){
        super(...args);
    }
    push(...args){
        // ...
        super.push(...args);
    }
    join(){
        return super.join("||")
    }
}
