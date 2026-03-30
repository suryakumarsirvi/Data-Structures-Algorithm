// Special number using methods.

function fact(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function specialNum(num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += fact(digit);
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        console.log(original + " is a Special Number");
    } else {
        console.log(original + " is NOT a Special Number");
    }
}

specialNum(145);