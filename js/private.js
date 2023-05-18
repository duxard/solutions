//1  - private fields

const Service = (function(){
    
    let _rate;
    
    function privateSetVal(x){
        _rate = x;
    }
    
    function privateGetVal(){
        return _rate;
    }
    
    function Service(name){
        this.name = name;
    }
    
    Service.prototype.publicGetVal = function(){
        return privateGetVal();
    };
    
    Service.prototype.publicSetVal = function(newVal){
        privateSetVal(newVal);
    };
    
    return Service;
})();

var s = new Service('my serv');
s.publicSetVal(333);

//2 "Module" pattern

const module = (function(){
    
    let innerValue = 0;
    
    function inc(){ ++innerValue }
    function dec(){ --innerValue }
    function show(){
        console.log(innerValue);
    }
    
    return {
        apiInc: inc,
        apiDec: dec,
        apiShow: show
    }
})();


//3 - private members (Symbol)

const Person = (function(){
    //private fields
    let firstName = Symbol('firstName');
    let lastName = Symbol('lastName');
    //private method
    const privateMethod = Symbol('privateMethod');
    
    class Person {
        constructor(first, last){
            this[firstName] = first;
            this[lastName] = last;
        }
        
        getFullName(){
            console.log( `${this[firstName]} ${this[lastName]}` );
        }
        
        [privateMethod](){
            console.log("Hello from private method");
        }
        
        invokePrivateMethod(){
            this[privateMethod]();
        }
    }
    
    return Person;
})();

let p = new Person("John", "Diggle");
p.getFullName();
p.invokePrivateMethod();

//4 Full privacy

const Entity = (function(){
    
    const privateData = new WeakMap();
    
    class Entity{
        constructor(p1, p2){
            privateData.set(this, {p1, p2});
        }
        
        get firstName(){
            return privateData.get(this).p1;    
        } 
        
        get lastName(){
            return privateData.get(this).p2;    
        }
    }
    
    return Entity;
})();

let e = new Entity("Barak", "Obama");
console.log( e.firstName );
console.log( e.lastName );

