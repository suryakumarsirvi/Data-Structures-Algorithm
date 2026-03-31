// Sort First half in Ascending and Second half in descending order in an array


// 1. Method

// function sortHalf(arr) {

//     let A = [];
//     let B = [];

//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         A.push(arr[i]);
//     }

//     for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
//         B.push(arr[i]);
//     }
//     A.sort();
//     B.sort((a, b)=> b - a)

//     let newArr = [...A, ...B];

//     console.log(newArr)
// }
// sortHalf([4, 3, 6, 2, 7, 1, 8, 5]);

// 2. Method

// function sortHalf(arr) {
//     let mid = Math.floor(arr.length / 2);

//     let A = arr.slice(0, mid);
//     let B = arr.slice(mid);

//     A.sort((a, b) => a - b);

//     B.sort((a, b) => b - a);

//     let newArr = [...A, ...B];

//     console.log(newArr);
// }

// sortHalf([4, 3, 6, 2, 7, 1, 8, 5]);

// 3. Method

function sortHalf(arr) {
    let ArrLength = arr.length;

    arr.sort((a, b) => a - b);

    let ArrHalfLength = Math.floor(ArrLength / 2);
    let i = ArrHalfLength;
    let j = ArrLength - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    console.log(arr);
}

sortHalf([4, 3, 6, 2, 7, 1, 8, 5]);
