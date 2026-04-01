// Maximum Number of Pairs in Array

function equal(arr){
    let result = [];
    let map = {};

    for(let ar of arr){
        if(map[ar]){
            result.push([ar, ar]);
            map[ar]--
        }else{
            map[ar] = (map[ar] || 0) + 1
        }
    }

    console.log(result.length);
}

equal([3, 2, 3, 2, 2, 2])