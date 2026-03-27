// Array left rotation by K elements
// First K elements hatao → end me chipka do

function rotationK(input, K){
    let arr = [...input];
    let Krotation = [];
    let newArr = [];

    for(let i = 0; i <= K - 1; i++){
        Krotation.push(arr[i]);
    }

    for(let i = 0 + K; i <= arr.length - 1; i++){
        newArr.push(arr[i]);
    }

    newArr.push(...Krotation);

    return newArr;
}

console.log(rotationK([1, 2, 3, 4, 5], 3));