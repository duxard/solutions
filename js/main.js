const cl = console.log;
const pc = (msg) => {
    console.log(`%c ${msg} `, `color: rgba(0, 183, 35, 0.85)`)
};

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
let na1 = a1.slice(3); // copy all elements starting from the one with index #3
let na2 = a1.splice(0,3); //delete first three elements
let na3 = a1.splice(-3)           //delete last three elements
let na4 = a1.splice(a1.length-3)  //delete last three elements
let na5 = a1.splice(3);   //delete all elements starting from the one with index #3

//2
let na4 = a5.shift();

//3
a6.push(...a7);
Array.prototype.push.apply(a8,a9);

//4
a2.forEach(el => el.length);

let a2n = a2.map(el => el.length);

//4.1
a6.map((elem, indx, currArr) => {
    currArr[indx] = elem*10;
});

//4.2
Array.from({length: 10}, () => true);
Array(10).fill(true);

let sum = a1.reduce((currVal, nextVal) => {
    return currVal+=nextVal;
}, 0);

var max = Math.max.apply(null, a5);

//5
cl( !!~s1.search(/FAF/) );
cl( /faf/ig.test(s1) );

//6
let matches = s1.match(/asta/gi).length;
let matches1 = s1.split(/asta/).length-1;

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
    };

    return f;
}

// another variant by wise.js

function sum2(a) {
    let res = a;

    return function acc(b) {
        if(typeof b === 'number') {
            res += b;
            return acc;
        }
        return res;
    }
}

/*
usage:
console.log( sum(1)(2)(3)() )
 */

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

// 9.1 using generator:
function* randomizer(a, b) {
    let min = a;
    let max = b;
    let i = 0;

    while(i<10) {
        ++i;
        yield Math.floor(min + Math.random()*(max + min - 1));
    }
}

cl( [...randomizer(1,100)] );

//10
let o1 = { x: null };
Object.defineProperty(o1, 'propX', {
    set: function(val){
        this.x = val;
    },
    get: function(){
        return this.x;
    }
});


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
cup.waterAmount(100); //or cup.waterAmount = 100;
cl(cup.waterAmount()) //or cl( cup.waterAmount )

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
};

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

/* third method */
newOb1 = JSON.parse(JSON.stringify(objToClone));

/*fourth method */
let obj1 = {x: 10, y:20},
    obj2 = {};

obj2 = {...obj1};

/* for array */
let g = a1.join('').split('').map(el => +el);

//15.1 - Iterate over object
for(let [key, val] of Object.entries(objToClone)){
//    cl(key, val);
}

//15.2
function f(){
    return [].join.call(arguments, ':')
}

const f = (...args) => [].join.call(args, ':');

//15.3
let pos1 = myArr.indexOf(110);
let pos2 = myArr.findIndex(el => el===110);
let pos3 = myArr.includes(NaN);
let pos4 = myArr.find(el => el===50)

//15.4
console.log( ~myArr.indexOf(110) );
console.log( myArr.includes(110) );

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

//17.2
let s = s1.replace(/^\s+|\s+$/g,'')

//17.3
let s = s1.replace(/\s+/g, '');

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

//30
function returnPositiveResponse(data, ms){
    return new Promise(resolve => {
        data.push(1);
        setTimeout(() => {
            resolve(data);
        }, ms);
    });
}

returnPositiveResponse([], 100)
    .then(resultOfFirstRequest => returnPositiveResponse(resultOfFirstRequest, 100))
    .then(resultOfSecondRequest => returnPositiveResponse(resultOfSecondRequest, 100))
    .then(total => console.log(total))
    .catch(err => console.error(err));

//fetch('https://jsonplaceholder.typicode.com/users')
//.then(response => response.json())
//.then(json => cl(json))
//.then(fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => cl(response)))
//.catch(err => console.error(err));

//32

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

//33
let obj3 = {
    x: 0,
    y: 99,
    hi(val){
        console.log(`Received: ${val}`);
    }
}

obj3.hi(3);

let proxy = new Proxy(obj3, {
    get(target, prop, receiver){
        if(prop === 'x'){
            return "I won't give you x prop";
        } else {
            return Reflect.get(...arguments);
        }
    },
    deleteProperty(target, prop){
        console.error("Unable to delete prop");
        return true;
    }
});

//console.log(Reflect)

//34

let obj4 = {
    a: 333
}

cl( obj4.a )
cl( Reflect.get(obj4, 'a') )

cl( '***********' );

cl( Object.defineProperty(obj4, 'b', {value: 444}) )
cl( Reflect.set(obj4, 'c', 555) )


//35

function* myGen(){
    const arr = [];
    let x = yield "pear";
    let y = yield "plum";
    let z = yield "peach";

    arr.push(x,y,z);
    return {arr, status: "done"};
}

let gen = myGen();
cl( gen.next() )
cl( gen.next(11) )
cl( gen.next(22) )
cl( gen.next(33) )

//36

function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  }).join('\r\n');
}

//37

function exec() {
    console.log( [].join.call(arguments, ':') );
}

//First variant - ES5
function decor(fn, delay) {
    return function() {
        let ctx = this;
        let args = arguments;
        setTimeout(function(){
            fn.apply(ctx, args);
        }, delay);
    }
}

//Second variant - ES6
const decor = (fn, delay) => (...args) => setTimeout(() => fn.apply(this, args), delay);

const arrayOfUndefined = Array.from({ length: 5 });
const numbers = Array.from({ length: 5 }, (e, i) => i);

function towerBuilder1(n) {
    var bricks = '*', spaces = ' '.repeat(n - 1), tower = [];
    for(var i = 0; i < n; i++) {
        var space = spaces.substr(0, n - i - 1);
        tower.push(space + bricks + space);
        bricks+='**';
    }
    return tower;
}

function fizzbuzz(){
    for(let i=0;i<100;i++){
        console.log( (i%3?'':'fizz') + (i%5?'':'buzz') || i )
      }
}

function isIsogram(str){
    return (new Set(str.split(''))).size === str.length;
}

const iterable1 = new Object();

iterable1[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable1]);
// expected output: Array [1, 2, 3]

function ending(n){
    let end = null,
        n100 = n%100,
        n10 = n%10;

    if(n100!==11 & n100%10===1){
        end = '';
    } else {
        if(n10>1 & n10<5){
            end = 'a';
        } else {
            ens = 'ov';
        }
    }

    return `${n} programmist${end}`;
}

let eachWordToUpperCase = (str) => {
    return str.split(" ")
        .map(el => el.charAt(0).toUpperCase()+el.substring(1))
        .join(" ");
}

// Check if 2 simple arrays equal
const compareArrays = (a, b) => a.every(el => b.includes(el)) && (a.length === b.length);

// Compare two arrays
let same = [...new Set(arr1.filter(el => arr2.includes(el)))];

// isogram
let isIso = word => word.toLowerCase() === [...new Set(word.toLowerCase().split(""))].join("");

// flat an array
let a1 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
let deepFlat = arr => arr.reduce((a,v) => a.concat(Array.isArray(v) ? deepFlat(v) : v), []);

// decorator with Proxy
function decor(fn, ms){
    return new Proxy(fn, {
        apply(target, thisArg, args){
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

// Write a JavaScript program to find the most frequent item of an array
function mostFrequent(arr) {
    let store = {},
        max = 0,
        symb = '';

    for(let i=0; i<arr.length; i++) {
        if(typeof store[arr[i]] === 'undefined') {
            store[arr[i]] = 1;
        } else {
            store[arr[i]] += 1;
        }
    }

    Object.keys(store).forEach(key => {
        if(store[key] > max) {
            max = store[key];
            symb = key;
        }
    });

    return `${symb} : ${max}`;
}
console.log(mostFrequent(['d', 3, 'a', 'd', 'd', 'c', 'c', 3, 1, 'a', 'd']));

// Generate random hex color
function generateRandoxHexColor() {
    let pad = sy => String(sy).length === 1 ? `0${sy}` : sy;
    let randHex = () => pad( Math.floor(Math.random()*256).toString(16) );
    return `#${randHex()}${randHex()}${randHex()}`;
}

// get values which exist in both arrays
const a1 = [1,2,3,4];
const a2 = [1,3,7,8];

const a3 = a1.filter(el => a2.includes(el)); // a3 -> [1,3]

// get number's length (without casting it to string)
const len = num => (num===0) ? 0 : Math.floor(Math.log10(num))+1;

//------------------------------------------------------------------
// Curring by monstolessons

function curry(fn) {
    const arity = fn.length;

    return function f1(...args) {
        if(args.length >= arity) {
            return fn(...args)
        } else {
            return function f2(...moreArgs) {
                const newArgs = args.concat(moreArgs);
                return f1(...newArgs);
            }
        }
    }
}

const curried = curry((a, b, c) => a+b+c);
console.log( curried(1,2,3) );
console.log( curried(1)(2)(3) );
console.log( curried(1)(2,3) );


// custom Promise.all() by wise.js
function promiseAll(promises) {
    const len = promises.length;
    let res = [];

    return new Promise((resolve, reject) => {
        for(let i=0; i<len; i++) {
            promises[i].then(resolvedData => {
                res.push(resolvedData);

                if(res.length === len) {
                    resolve(res);
                }
            });
        }
    });
}


promiseAll([
    new Promise(res => res(1)),
    new Promise(res => res(2)),
    new Promise(res => res(3))
]).then(console.log);


