// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)


function isAutomorphic(num) {
    const square = num * num;

    const result = square.toString().endsWith(num.toString());

    console.log(result);
}

isAutomorphic();