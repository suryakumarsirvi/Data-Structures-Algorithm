// Divide Array Into Equal Pairs

function DivEq(arr) {
    let map = {};
    let result = [];

    for (let num of arr) {
        if (map[num]) {
            result.push([num, num]);
            map[num]--;
        } else {
            map[num] = (map[num] || 0) + 1;
        }
    }

    console.log(result);
}

DivEq([3, 3, 2, 2, 3, 2])