// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))


function greeting(gender) {

    if (gender === undefined || gender === null || gender.trim() === "" || !gender) {
        return alert("Gender is required.")
    }

    const gen = gender.trim().toLowerCase();

    if (gen === "male") {
        return console.log("Good Morning, Sir");
    } else if (gen === "female") {
        return console.log("Good morning, Madam");
    } else {
        console.log("Invalid Gender Type.")
    }
}

greeting("MALE")