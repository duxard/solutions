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

// The Sieve of Eratosthenes
const sieve = max => {
    // Make array of length max and fill with true
    const sieve = new Array(max).fill(true)

    // Iterate from 2 until square root of max
    for (let i = 2; i < Math.sqrt(max); i++) {
    // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
    // from there as NOT a prime
    if (sieve[i]) {
        for (let j = Math.pow(i, 2); j < max; j += i) {
                sieve[j] = false
            }
        }
    }

    // Now we can reduce our sieve to only the Prime indexes that are true
    return sieve.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
          primes.push(i)
        }

    return primes;
    }, [])
}