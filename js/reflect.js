// First example of reflect usage
let numbersView = obj => new Proxy(obj, {
    get(target, key, receiver) {
        return receiver(target[key])
    }
});

let decimal = x => String(x);

let english = x => {
    if (x === 1) return 'one';
    if (x === 2) return 'two';

};

let v = numbersView({
    a: 1,
    b: 2
});

console.log(Reflect.get(v, 'a', decimal))
console.log(Reflect.get(v, 'a', english))

// Another example - validation 
let numbers = [];

numbers = new Proxy(numbers, {
    set: function(target, prop, val, receiver){
        if (val<0) {
            throw new Error("Negative values are not allowed");
        } else {
            Reflect.set(target, prop, val); // target[prop] = val;
            return true;
        }
    }
});

try {
    numbers.push(1); // ok
    numbers.push(-1); // fail
} catch(e) {
    console.error( e.message ); // Negative values are not allowed
}


