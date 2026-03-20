// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

function greeting(gender) {

    if (gender === undefined || gender === null || gender.trim() === "" || !gender) {
        return alert("Gender is required.")
    }

    const gen = gender.trim().toLowerCase();

    if (gen === "male") {
        return console.log("Good Morning, Sir");
    } else if (gen === "m") {
        return console.log("Good morning, Sir");
    } else if (gen === "female") {
        return console.log("Good morning, Madam");
    } else if (gen === "f") {
        return console.log("Good morning, Madam");
    } else {
        console.log("Invalid Gender Type.")
    }
}

greeting("m")