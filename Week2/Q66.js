// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)

function subArr(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === k) {
                count++;
            }
        }
    }

    console.log(count);
}

subArr([1, 2, 3, 7, 5], 12);

