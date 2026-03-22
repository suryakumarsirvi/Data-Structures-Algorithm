// Print \hello\" until user gives wrong input using do while"

function hello() {
    let inp = ''

    do {
        inp = prompt('ENTER PASS CODE.')
    } while (inp !== "Hello")
}

hello()