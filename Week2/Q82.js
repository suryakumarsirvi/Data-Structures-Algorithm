// Smallest Index With Equal Value

function sameValSameIndex(arr){
    for(let i=0; i< arr.length;i++){
        if(i % 10 === arr[i]){
           console.log(i);
           return;
        }
    }

    console.log(-1)
}

sameValSameIndex([5,4,3,2,1,5])