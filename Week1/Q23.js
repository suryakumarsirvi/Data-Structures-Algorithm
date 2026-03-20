// Print natural number up to n.

function printNaturalNums(num){

    if(num <= 0){
        return console.log(`${num} is not natural number.`)
    }

    for(let i = 1; i <= num; i++){
        console.log(i);
    }
}

printNaturalNums(-1)