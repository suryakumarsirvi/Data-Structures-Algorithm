// Question 22 using Switch (Check Consonant or Vowel using Switch);


function check() {
    let choice;

    do {
        let method = prompt("Enter operation (add, sub, mul, div) or type 'exit' to stop:");

        if (!method) continue;

        method = method.trim().toLowerCase();

        if (method === "exit") {
            console.log("Calculator Closed");
            break;
        }

        if (method !== "add" && method !== "sub" && method !== "mul" && method !== "div") {
            alert("Invalid method, try again");
            continue;
        }

        let num1 = Number(prompt('Enter first number:'));
        let num2 = Number(prompt('Enter second number:'));

        if (isNaN(num1) || isNaN(num2)) {
            alert("Invalid numbers! Try again.");
            continue;
        }

        switch (method) {
            case "add":
                console.log("Result:", num1 + num2);
                break;

            case "sub":
                console.log("Result:", num1 - num2);
                break;

            case "mul":
                console.log("Result:", num1 * num2);
                break;

            case "div":
                if (num2 === 0) {
                    console.log("Cannot divide by zero");
                } else {
                    console.log("Result:", num1 / num2);
                }
                break;
        }

        choice = prompt("Do you want to continue? (yes/no)");
    } while (choice && choice.toLowerCase() === "yes")
}

check();