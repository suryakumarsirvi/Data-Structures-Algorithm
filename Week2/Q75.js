// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)

function sumArray(arr) {
    let leftArr = 0;
    let rightArr = 0;
    let diff = 0;

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        leftArr += arr[i];
    }

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        rightArr += arr[i];
    }

    diff = Math.abs(leftArr - rightArr)

    console.log(`To Balance both array we have to add: ${diff}`)
}

sumArray([1, 2, 1, 2, 1, 3])

