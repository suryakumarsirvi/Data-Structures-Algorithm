// Sort Even and Odd Indices Independently

function EvenOddInds(arr) {
    let Even = [];
    let Odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            Even.push(arr[i]);
        } else {
            Odd.push(arr[i]);
        }
    }

    Even.sort((a, b) => a - b);
    Odd.sort((a, b) => a - b);

    let res = [];
    let e = 0; let o = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            res[i] = Even[e++];
        } else {
            res[i] = Odd[o++];
        }
    }

    return res
}

console.log(EvenOddInds([4, 1, 2, 3]));