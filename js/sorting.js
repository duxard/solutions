function bubble(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

// Fisher-Yates shuffle
function shuffleArray(arr){
    for(let i=arr.length-1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Shaker sort
function shakerSort(arr){
    let left = 0,
        right = arr.length-1;
    
    do {
        for(let i=left; i<right; i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
        right--;
        
        for(let i=right; left<i; i--){
            if(arr[i]<arr[i-1]){
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            }
        }
        left++;
    } while (left<right);
    
}