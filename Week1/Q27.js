// Sum up to n terms.

function SumOftoEnd(num){
    let sum = 0;

    for(let i = 1; i <= num; i++){
        sum += i
    }

    console.log(sum)
}

SumOftoEnd(4)