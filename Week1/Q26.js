// Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)

function tableGenerator(tableOf){
    for(let i = 1; i <= 10; i++){
        console.log(`${tableOf} * ${i} = ${tableOf * i}`)
    }
}

tableGenerator(5)