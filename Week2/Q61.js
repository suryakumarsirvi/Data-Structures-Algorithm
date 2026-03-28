// Array Reverse Without Using Extra space

// function reverseNoExtraSpace(...data) {
//     for (let i = data.length - 1; i >= 0; i--) {
//         data.push(data[i]);
//     }

//     for (let i = 0; i <= data.length - 1; i++) {
//         data.shift(data[i]);
//     }

//     console.log(data);
// }

// reverseNoExtraSpace(10, 20, 30, 40, 50);

function noExtraSpaceReverce(...data) {
    for (let i = 0; i <= Math.floor(data.length / 2); i++) {
        [data[i], data[data.length - i - 1]] = [data[data.length - i - 1], data[i]]
    }

    console.log(data)
}

noExtraSpaceReverce(10, 20, 30, 40, 50)