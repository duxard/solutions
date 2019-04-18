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