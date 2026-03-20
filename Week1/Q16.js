// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

function userValidator(name, age) {
    if (!name || !age) {
        return alert('Name and Age is required.')
    }

    const userName = name.trim().split('').map((l, index) => (
        index === 0 ? l.toUpperCase() : l.toLowerCase()
    )).join('');

    if(age <= 0 || age >= 100){
        return console.log('Age is Not Acceptable.')
    }

    const willEligible = 18 - age;

    if(age <= 17){
        return console.log(`Sorry ${userName}, You are not Eligible for Vote. Try after ${willEligible} years.`)
    }

    if(age >= 18){
        return console.log(`Hello ${userName}, You are a valid voter.`)
    }
}

userValidator("SURYA", 16)