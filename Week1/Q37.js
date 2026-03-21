// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)

function isPalindromic(num) {
    const reverseVala = num.toString().split("").reverse().join("")

    if (num === Number(reverseVala)) {
        return console.log(`${num} is Palindromic.`)
    }

    return console.log(`${num} is Not Palindromic.`)

}

isPalindromic(111);