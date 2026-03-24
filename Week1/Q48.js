// Right Triangle - Alphabet Pattern

// Capital letters (A–Z) → 65 se 90
// Small letters (a–z) → 97 se 122

function aplhaNum(num) {
    
    for (let i = 1; i <= num; i++) {
        let Alphabet = "";
        // let num = "";
        for (let j = 1; j <= i; j++) {
           Alphabet += String.fromCharCode(64 + j) + " "
        }
        console.log(Alphabet)
    }
}

aplhaNum(5)