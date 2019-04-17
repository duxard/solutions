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
    objToClone = {bool: true, x: 1000, band: "Limp Bizkit"},
    
    nestedProps = {
        s: false,
        y: 100,
        x: {
            x:{
                s: false,    
                x: {
                    s: false,
                    y: 1000,
                    x: {
                        x: {
                            s: false
                        }
                    }
                }
            }
        }
    },
    
    objectFotDestruct = {
        x: 100,
        y: 200,
        location: 'GB'
    };



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

function debouncer(f, time){
    let timeout;
    return function(...args){
        if(timeout){
            clearTimeout(timeout);
            
        }
        timeout = setTimeout(() => {f(...args)}, time);
    }
}

//19

function throttled(fn, delay){
    let  lastExecution = 0;
    return function(...args) {
        const now = (new Date()).getTime();
        if(now - lastExecution < delay) {
            return;
        }
        lastExecution = now;
        return fn(...args);
    }
}

//20 set all certain properties to "true" in object

const setAllInnerPropsTotrue = (function(){
    return function f(obj){
        if(Object.getOwnPropertyNames(obj).length){
            for(var key in obj){
                if(typeof(obj[key]) === 'object') {
                    f(obj[key]);
                }
                if(key === 's'){
                    obj[key] = true;
                }
            }
        }
    }   
})();

setAllInnerPropsTotrue(nestedProps);

//21
const asta1 = {
    x: 1000,
    sx(){
        return this.x;
    }
};

const asta2 = {
    x: 2000,
    sx(){
        return this.x;
    }
};

const arr = [asta1, asta2];

function asyncSx(array, cb){
    array.forEach(function(currObj){
        setTimeout(cb.bind(null, currObj), 0);
    });
}

//ES6 version:
//const asyncSx = (array, cb) => array.forEach(currObj => setTimeout(cb.bind(null, currObj), 0));

asyncSx(arr, el => cl(el.sx()));

//22
function asyncForEach(array, cb){
    array.forEach(function(el){
        setTimeout(cb.bind(null, el), 0);
    });
}

asyncForEach([12,34,55], el => cl(el));

//23
let { x: axisx, y } = objectFotDestruct;

//24
const getNumOfdays = (year, month) => (new Date(year, month, 0)).getDate();

//25
const getNumOfDaysInCurrMonth = () => new Date((new Date()).getFullYear(), (new Date()).getMonth()+1, 0).getDate();

//26
let matchCounter1 = s1.toLocaleLowerCase().split('asta').length-1;
let matchCounter2 = s1.match(/asta/gi).length;


//27
const sayHello = (name) => `Hello, ${name}`;

const loggingDecorator = (func) => {
    return function(){
        console.log("Decorator: start working");
        let result = func.apply(this, arguments);
        console.log("Decorator: stop working");
        console.log(result);
    }
}

const wrapped = loggingDecorator(sayHello); 
wrapped("Barak");

//28
//const sayHi = () => console.log("Hi, dawg!");
//
//const deferFuncCall = (func, timer) => {
//    return function(){
//        let now = Date.now();
//        for(let i=0;;i++){
//            if(Date.now() - now >= timer){
//                func();
//                break;
//            }
//        }
//    }
//}
//
//let deferred = deferFuncCall(sayHi, 2000);
//deferred();

//29
const sayHi = () => console.log("Hi, dawg!");

const asyncDeferFuncCall = (func, timer) => {
    return function(){
        setTimeout(() => {
            func.apply(this, arguments);
        }, timer);
    }
}

let deferred = asyncDeferFuncCall(sayHi, 2000);
deferred();








