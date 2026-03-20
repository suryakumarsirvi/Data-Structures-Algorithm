// Factorial of a number

function factReal(num) {

    let sum = 1

    for (let i = 1; i <= num; i++) {
        sum *= i
    }
    console.log(sum)

}

factReal(5)