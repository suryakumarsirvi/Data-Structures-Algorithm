// Print all the factors of a number.

function factNum(num){
    for(let i = 1; i<=12; i++){
        if(num % i === 0){
            console.log(`${i} is Factor of ${num}`)
        }
    }
}

factNum(12)