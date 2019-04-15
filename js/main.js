const cl = console.log;

let a1 = [1,2,3,4,5,6,7,8,9],
    a2 = ["css", "html", "js"],
    a3 = [1,1,1,2,2,3,4,5,5],
    a4 = [1,-2,-3,4,5],
    a5 = [1,2,3,4,5,6,7,8,9],
    a6 = [1,2,3],
    a7 = ['a', 'b', 'c'],
    a8 = [1,2,3],
    a9 = ['a', 'b', 'c'],
    aa8 = [1,2,3],
    aa9 = ['a', 'b', 'c'],
    s1 = "  asta ., astAo edwe we  weasta   we asFAFt a ",
    s2 = "abcdefg",
    objectArr = [{id:101,x:"one"}, {id:102,x:"two"}, {id:103,x:"three"}, {id:104,x:"four"}, {id:105,x:"five"}],
    objToClone = {bool: true, x: 1000, band: "Limp Bizkit"};



//1 
let na1 = a1.slice(3); //first three
let na2 = a1.splice(0,3); //last 3
let na3 = a1.splice(3);   //last 3 - ...

//2
let na4 = a5.shift();

//3
a6.push(...a7);
Array.prototype.push.apply(a8,a9);

//4
a2.forEach(el => el.length);

let a2n = a2.map(el => el.length);

let sum = a1.reduce((currVal, nextVal) => {
    return currVal+=nextVal;
}, 0);

var max = Math.max.apply(null, a5);

//5
cl( !!~s1.search(/FAF/) );
cl( /faf/ig.test(s1) );

//6
let matches = s1.match(/asta/gi).length;

//7
function foo1(...args){
    return Array.prototype.slice.call(arguments);
}

function foo2(){
    return Array.prototype.join.call(arguments,',');
}

//8
function sumA(a){
    return function(b){
        return a+b;
    }
}

function sumB(a){
    let res = a;
    
    function f(b){
        res += b;
        return f;
    }
    
    f.toString = function(){
        return res;
    }
    
    return f;
}

//9

function rand(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min));
}

let arr1 = [];
for(let i=0; i<=3; i++){
    arr1[i] = [];
    for(let j=0; j<=3; j++){
        arr1[i][j] = rand(1,100);
    }
}

//10
let o1 = { x: null };
Object.defineProperty(o1, 'propX', {
    set: function(val){
        this.x = val;
    },
    get: function(){
        return this.x;
    }
})


let o2 = { 
    x: null,
    get propX(){
        return this.x;
    },
    set propX(val){
        this.x = val;
    }
};

//11

function Coffee(){
    let waterAmount = 0;
    
    this.waterAmount = function(amount){
        if(!arguments.length){
            return waterAmount;
        } else {
            waterAmount = amount;
        }
    }
}

let cup = new Coffee();
cup.waterAmount(100);
cl(cup.waterAmount())

//14
Array.prototype.push = (function(){
    let original = Array.prototype.push;
    return function(){
        //...
        return original.apply(this, arguments);
    }
})();

let arr2 = [];
arr2.join = function(){
    //...
    return Array.prototype.join.apply(this, arguments);
}

//14.1
let findIndexById = objectArr.findIndex(el => el.id === 103);

let findIndexSecond = objectArr.map(el => el.x).indexOf("Three".toLowerCase());

//15
let newOb1 = {},
    newOb2 = {};

/* first method*/
for(let key in objToClone){
    newOb1[key] = objToClone[key]
}

/* second method*/
Object.assign(newOb2, objToClone);

//15.1 - Iterate over object
for(let [key, val] of Object.entries(objToClone)){
//    cl(key, val);
}

//16
let myMap = new Map([
    ['one', 'first record'],
    ['two', 'second record']
]);

myMap.set('three', 'third record');

for(let key of myMap.entries()){
//    cl(key)
}

//17.1
let mySet = new Set(a5);
mySet.add('elem');

let itSet = mySet[Symbol.iterator]();
let itVal = itSet.next();

while(!itVal.done){
//    cl(itVal.value);
    itVal = itSet.next();
}


//second meth
for(let key of mySet.values()){
//    cl(key)
}

//third meth
//mySet.forEach(el => console.log(el));

//17
for(let char of s2){
//    cl(char);
}

let itChar = s2[Symbol.iterator]();
let itCharNext = itChar.next();
while(!itCharNext.done){
//    cl(itCharNext.value);
    itCharNext = itChar.next()
}

//18
const Service = (function(){
    
    let privateValue = null,
        symbolValue = Symbol('symbolValue');
    
    function privateMethGet(){
        return privateValue;
    }
    
    function privateMethSet(newVal){
        privateValue = newVal;
    }
    
    function Service(publicVal, name){
        this.publicVal = publicVal;
        this[symbolValue] = name;
    }
    
    Service.prototype.publicMethGet = function(){
        return this.publicVal;
    }
    

    Service.prototype.publicGetPrivateVal = function(){
        return privateMethGet();
    }
    
    Service.prototype.publicSetPrivateVal = function(x){
        privateMethSet(x);
    }
    
    return Service;
    
})();

let serv = new Service(999, "serenity");
serv.publicSetPrivateVal(222);


//using symbols as private members

const Person = (function(){
    
    const firstName = Symbol('firstName');
    const lastName = Symbol('lastName');
    
    class Person {
        constructor(p1, p2){
            this[firstName] = p1;
            this[lastName] = p2;
        }
        
        getFullName(){
            return `${this[firstName]} ${this[lastName]}`
        }
    }
    
    return Person;
})();

let person = new Person("John", "Polloc");
cl( person.getFullName() )















