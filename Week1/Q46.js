// Right Triangle - Star Pattern

function starPattern() {
    for (let i = 1; i <= 5; i++) {
        let num = "";
        for (let j = 1; j <= i; j++) {
            num += "* "
        }
        console.log(num)
    }
}

starPattern()