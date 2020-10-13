let additionalAPI = {
    sayName(){
        console.log(this.name);
    }
};

class Dog {
    constructor(name){
        this.name = name;
    }

    bark(){
        console.log('Woof!');
    }
}

class Shepherd extends Dog {
    constructor(name){
        super(name);
    }
}

Object.assign(Shepherd.prototype, additionalAPI);


/* usage */
let d = new Shepherd('Lessy');
d.bark();
d.sayName();
