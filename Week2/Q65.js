// Move all the negative elements on the left side and positive elements on the right side O(n).

function sortNP(arr) {
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }

    return arr;
}

console.log(sortNP([-1, 4, 6, 3, -2, -3]));