// Strong number using methods.

// function strongNum(arr) {
//     let fact = 1;
//     let sum = 0;
//     let arrnew = [];

//     for (let ar in arr) {
//         for (let i = arr[ar]; i >= 1; i--) {
//             fact *= i
//         }
//         arrnew.push(fact);
//         fact = 1
//     }

//     sum = arrnew.map((num) => (
//         sum += num
//     ))

//     if(String(sum[sum.length - 1]) === arr.join('')){
//         console.log(`[${arr}] contains strong numbers.`)
//     }else{
//         console.log(`[${arr}] doesn't contains strong numbers.`)
//     }
// }

// strongNum([1, 4, 2])

function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function isStrongNumber(num) {
    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        console.log(original + " is a Strong Number");
    } else {
        console.log(original + " is NOT a Strong Number");
    }
}

isStrongNumber(145);
isStrongNumber(123);