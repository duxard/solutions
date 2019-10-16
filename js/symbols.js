const cl = console.log;

// Old way of doing it
let o1 = {
    toString(){
        return 'some string';
    },
    valueOf(){
        return 1111;
    }
}

cl( +o1 ); // some string
cl( `${o1}` ); // 1111


// New way of doing it
let o2 = {
    [Symbol.toPrimitive](hint){
        return hint==='string' ? 'some string' : 1111;
    }
}

cl( +o2 ); // some string
cl( `${o2}` ); // 1111
         