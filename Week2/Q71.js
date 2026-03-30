// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)

function bruno(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            sum += arr[j] - arr[i]
        }
    }

    return sum;
}

console.log(bruno([2, 3, 4, 5, 6]))