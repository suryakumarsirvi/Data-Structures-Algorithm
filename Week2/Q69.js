// Concatenation of array


function concat(arr1, arr2) {
    let newArr = [];

    for (let val of arr1) {
        newArr.push(val);
    }

    for (let val of arr2) {
        newArr.push(val);
    }

    return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));