// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \YES\"


function isSorted(...data) {
    let arr = data;
    let result = false;

    for (let i = 0; i <= data.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return result = false;
        } else {
            result = true
        }
    }

    return result;
}

console.log(isSorted(1, 5, 8, 9, 10, 15))