// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)

function digitSplit(num) {
    let splitted = num.toString().split('')

    for (let i = 0; i <= splitted.length - 1; i++) {
        console.log(splitted[i])
    }
}

digitSplit(123)