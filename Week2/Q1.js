// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.


function sumAndAvg(size, inputs) {
    let arr = [];
    let sum = 0;

    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }

    let newArr = [...arr, inputs];

    for (let ar of newArr) {
        sum += ar
    }

    let avg = Math.floor(sum / newArr.length);

    console.log(`Total sum ${sum}`, `Average : ${avg}`);
}

sumAndAvg(10, 12);