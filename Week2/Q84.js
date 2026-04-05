// Make Array Zero by Subtracting Equal Amounts

function subsEq(arr) {
    let set = new Set();

    for (let num of arr) {
        if (num !== 0) {
            set.add(num);
        }
    }

    console.log(set.size);
}

subsEq([1, 5, 0, 3, 5]);