// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

function reverseArray(...inputs) {
    let arr = inputs;
    let reverseArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }

    return reverseArr;
}

console.log(reverseArray(2, 5, 7, 8, 10, 12))