function showArgs(){
    console.log( Array.prototype.join.call(arguments, ":") );
}

// async decorator
// 1 variant
function makeAsync(fn){
    return function(){
        const args = arguments,
              ctx = this;
        setTimeout(function(){
            fn.apply(ctx, args);
        }, 0);
    }
} 

// 2 variant
const makeAsync = (fn) => (...args) => {
    setTimeout(() => {
        fn.apply(this, args);
    }, 0);
}

// usage
let wrapped = makeAsync(showArgs);
wrapped(1,2,3,4); // 1:2:3:4