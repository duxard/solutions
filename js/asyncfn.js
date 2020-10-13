function showArgs(){
    console.log( Array.prototype.join.call(arguments, ":") );
}

// 1 variant
function makeAsync1(fn){
    return function(){
        const args = arguments,
              ctx = this;
        setTimeout(function(){
            fn.apply(ctx, args);
        }, 0);
    }
} 

// 2 variant
const makeAsync2 = (fn) => (...args) => {
    setTimeout(() => {
        fn.apply(this, args);
    }, 0);
};

// usage
let wrapped = makeAsync1(showArgs);
wrapped(1,2,3,4); // 1:2:3:4
