// Find sum of minimum absolute difference of the given array

function minAbsDiff(arr) {

    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    for (let i = 0; i < arr.length - 1; i++) {
        res += Math.abs(arr[i] - arr[i + 1]);
    }


    console.log(res);
}

minAbsDiff([8, 5, 3, 1])