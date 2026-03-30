// Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: 
// a) The First element is replaced by the multiplication of the first and second. 
// b) The last element is replaced by multiplication of the last and second last. 
// (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})


function except(arr) {
    let newArr = [];

    newArr.push(arr[0] * arr[1]);

    for (let i = 1; i < arr.length - 1; i++) {
        newArr.push(arr[i - 1] * arr[i + 1]);
    }

    newArr.push(arr[arr.length - 1] * arr[arr.length - 2]);

    return newArr;
}   

console.log(except([2, 3, 4, 5, 6]))
