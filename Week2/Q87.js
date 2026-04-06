// Smallest Index With Equal Value

function smallEqVal(arr){
    let res = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === i){
            res.push(arr[i]);
        }
    }

    console.log(res);
}

smallEqVal([-1, 0, 2, 4, 4, 5, 0 , 0 , 3, 4, 10])