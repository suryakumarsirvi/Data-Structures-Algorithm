// Bubble Sort.

function bubbleSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }

    console.log(arr)
}

bubbleSort([50, 40, 80, 10, 30])