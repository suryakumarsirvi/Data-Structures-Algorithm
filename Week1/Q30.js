w

function factNum(num){
    for(let i = 1; i<=num; i++){
        if(num % i === 0){
            console.log(`${i} is Factor of ${num}`)
        }
    }
}

factNum(12)