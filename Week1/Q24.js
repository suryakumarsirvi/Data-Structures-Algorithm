// Reverse for loop. Print n to 1.

function reverseLoop(num){

    if(num <= 0){
        return console.log(`Invalid number.`)
    }

    for(let i = num; i >= 1 ; i--){
        console.log(i)
    }
}

reverseLoop(10)