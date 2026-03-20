// Accept three numbers and print the greatest among them

function theGreatest(n1, n2, n3) {
    if (!n1 && !n2 && !n3) {
        return console.log('Enter 3 numbers to processed.')
    }

    if (n1 > n2 && n1 > n3) {
        return console.log(`${n1} is greater than ${n2} & ${n3}`);
    }

    if (n2 > n1 && n2 > n3) {
        return console.log(`${n2} is greater than ${n3} & ${n1}`);
    }

    if (n3 > n2 && n3 > n1) {
        return console.log(`${n3} is greater than ${n2} & ${n1}`);
    }

}

theGreatest(12, 243, 34)