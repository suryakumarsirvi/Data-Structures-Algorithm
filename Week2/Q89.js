// Minimum Sum of Four Digit Number After Splitting Digits

function splitDigit(num) {
    let digits = [];

    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }

    return digits;
}

function minDigSum(num) {
    let digits = splitDigit(num);

    digits.sort((a, b) => a - b);

    let num1 = 0;
    let num2 = 0;

    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            num1 = num1 * 10 + digits[i];
        } else {
            num2 = num2 * 10 + digits[i];
        }
    }

    console.log(num1 + num2);
}

minDigSum(2932);