// Min Max Game - Array

function minMax(arr) {

    while (arr.length > 1) {
        let newArr = [];

        for (let i = 0; i < arr.length; i += 2) {

            if ((i / 2) % 2 === 0) {
                newArr.push(Math.min(arr[i], arr[i + 1]));
            } else {
                newArr.push(Math.max(arr[i], arr[i + 1]));
            }

        }

        arr = newArr;
    }

    console.log(arr[0]);
}

minMax([1, 3, 5, 2, 4, 8, 2, 2]);