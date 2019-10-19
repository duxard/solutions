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

// Quicksort

const quickSort = (
  unsortedArray,
  comparator = defaultComparator
) => {

  // Create a sortable array to return.
  const sortedArray = [ ...unsortedArray ];

  // Recursively sort sub-arrays.
  const recursiveSort = (start, end) => {

    // If this sub-array is empty, it's sorted.
    if (end - start < 1) {
      return;
    }

    const pivotValue = sortedArray[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const sort = comparator(sortedArray[i], pivotValue);

      // This value is less than the pivot value.
      if (sort === -1) {

        // If the element just to the right of the split index,
        //   isn't this element, swap them.
        if (splitIndex !== i) {
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }

        // Move the split index to the right by one,
        //   denoting an increase in the less-than sub-array size.
        splitIndex++;
      }

      // Leave values that are greater than or equal to
      //   the pivot value where they are.
    }

    // Move the pivot value to between the split.
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  // Sort the entire array.
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};
