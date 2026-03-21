// Check if the number is Prime or not.

function isPrime(num) {
    for (let i = 2; i <= num; i++) {
        if(num % num === 0 && num % i !== 0){
            return console.log(`${num} is Prime Number.`)
        }

        return console.log(`${num} is Not Prime Number.`)
    }
}

isPrime(24)


// 2, 3, 5, 7, and 11