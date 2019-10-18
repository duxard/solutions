
// http://javascript.info/event-loop

let print = console.log;

function foo(){
    print('foo function');
}

// Macrotask
setTimeout(foo, 0);

// Microtask #1
Promise.resolve().then(() => print('promise')).catch(e => print(e));

// Microtask #2
queueMicrotask(() => print('action #1'));

// Task
print('action #2');


/*
Output:

action #2
promise
action #1
foo function

*/