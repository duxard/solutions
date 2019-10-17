// The simpliest solution
function fibb(n){
    if(n===0||n===1){
        return n;
    }
    
    let a = 1,
        b = 1;
    for(let i=3, i<=n; i++){
        let c = a+b;
        a = b;
        b = c;
    }
    
    return b;
}

// Recursive Fibonacci
function fibbRec(){
    return n===0||n===1 ? n : fibb(n-1) + fibb(n-2);
}

// Cached Fibonacci
const fibbCache = (function(){
    let memo = {};
     function f(n){
         let val;
         if(n in memo) {
             val = memo[n];
         } else {
             if(n===0 || n===1){
                 val = n;
             } else {
                 val = f(n-1) + f(n-2);
                 memo[n] = val; //!!!
             }
         }
         return val;
     }
    return f;
})();

// Binet's formula
function fibbBine(n){
    return n === 0 ? n : Math.floor( (Math.pow((1+Math.sqrt(5))/2, num) - Math.pow((1-Math.sqrt(5))/2, num))/Math.sqrt(5) );
}
