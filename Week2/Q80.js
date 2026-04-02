// Count Equal and Divisible Pairs in an Array

function EqDiv(arr, k){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j] && ((i * j) % k === 0 )){
                sum++
            }
        }
    }

    console.log(sum)
}

EqDiv([1, 2, 2, 2, 1, 3], 2)