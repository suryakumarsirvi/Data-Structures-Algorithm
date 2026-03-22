// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)

// 145
// 1*1 = 1
// 4*3*2*1 = 24
// 5*4*3*2*1 = 120

function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i
    }

    return fact;
}

function isStrong(num) {
    const digits = num.toString().split('');
    let sum = 0;

    for (let ar of digits) {
        sum += factorial(Number(ar));
    }

    if(sum !== num){
       return console.log(`${num} is not Strong Number.`)
    }

    return console.log(`${num} is Strong Number.`)
}

isStrong(143);

