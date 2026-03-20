// Print the sum of all even & odd numbers in a range separately.

function oddandEven(num) {
    let Odd = 0
    let Even = 0

    for (let i = 1; i <= 15; i++) {
        if (i % 2 === 0) {
            Even += i
        } else {
            Odd += i
        }
    }

    console.log(`Odd: ${Odd} & Even: ${Even}`)
}

oddandEven(15)