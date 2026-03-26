// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

function secondGreatest(...data) {
    let greatest = data[0]; 
    let secondGreatest = greatest; 

    for(let i = 1; i < data.length; i++){
        if(data[i] > greatest){
            secondGreatest = greatest; 
            greatest = data[i];
        }

        if(data[i] < greatest && secondGreatest < data[i]){
            secondGreatest = data[i];
        }
    }
    
    console.log(`Second Greatest = ${secondGreatest}`) 
}

secondGreatest(2, 96, 69, 77, 145, 20, 12, 4, 191);