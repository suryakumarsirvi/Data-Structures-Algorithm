// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.



function sumAndAvg(size, inputs) {
    let sum = 0;

    for (let i = 0; i < size; i++) {
        sum += inputs[i];
    }

    let avg = sum / size;

    console.log(`Total sum: ${sum}`);
    console.log(`Average: ${avg}`);
}

sumAndAvg(4, [10, 20, 30, 40]);
