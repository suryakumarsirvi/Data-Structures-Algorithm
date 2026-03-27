// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

function secondGreatest(...data){
    let great = data[0];
    let secondGreat= great;

    for(let i = 1; i < data.length; i++){
        if(data[i] > great){
            secondGreat = great;
            great = data[i];
        }

        if(data[i] < great && secondGreat < data[i]){
            secondGreat = data[i];
        }
    }
    
    console.log(secondGreat);
}
secondGreatest(2, 96, 69, 77, 145, 20, 12, 4, 191);
