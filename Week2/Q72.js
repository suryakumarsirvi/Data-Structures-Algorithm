// You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').

function group(arrA, arrB) {
    let A = 0;
    let B = 0;
    let C = 0;

    for (let i = 0; i < arrA.length; i++) {
        if (arrB[i] === 'a') {
            A += arrA[i];
        } else if (arrB[i] === 'b') {
            B += arrA[i];
        } else {
            C += arrA[i];
        }
    }

    let minimum = Math.min(A + B, C);

    console.log(minimum)
}

group([10, 20, 30, 40, 50], ['a', 'b', 'c', 'a', 'c'])