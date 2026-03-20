// Accept an integer and check whether it is an even number or odd.


function checkNum(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an even number.`)
    } else {
        console.log(`${num} is an odd number.`)
    }
}

checkNum(16)