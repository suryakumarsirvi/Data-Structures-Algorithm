// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)


function swap(n1, n2) {
        n1 = n1 + n2,
        n2 = n1 - n2,
        n1 = n1 - n2

    console.log(`a: ${n1}, b: ${n2}`); // 11, 28

}

swap(12, 6)

// let a = 28
// let b = 11

// a = a + b // 28 + 11 = 39
// b = a - b // 39 - 11 = 28
// a = a - b // 39 - 28 = 11

// console.log(`a: ${a}, b: ${b}`); // 11, 28