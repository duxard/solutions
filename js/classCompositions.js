/*
const f1 = a => a*10;
const f2 = b => b*10;
const f3 = c => c*10;

let bundle = pipe(f1, f2, f3);
console.log( bundle(1) );
*/

const _pipe = (fn1, fn2) => arg => fn2(fn1(arg));
const pipe = (...args) => args.reduce(_pipe);

/*********************************************/

class Animal {
    constructor(name){
        this.name = name;
    }
}

function canSwim(superclass){
    return class extends superclass {
        constructor(args){
            super(args);
        }
        swim(){
           console.log('swimming'); 
        }
    }
}

function canEat(superclass){
    return class extends superclass {
        constructor(args){
            super(args);
        }
        eat(){
           console.log('eating'); 
        }
    }
}

function canBite(superclass){
    return class extends superclass {
        constructor(args){
            super(args);
        }
        bite(){
           console.log('biting'); 
        }
    }
}

let Composition = pipe(canBite, canEat, canSwim)(Animal);

class Dog extends Composition {
    constructor(name){
        super(name);
    }
}

let d = new Dog('Lessy');
d.eat();
d.bite();
d.swim();