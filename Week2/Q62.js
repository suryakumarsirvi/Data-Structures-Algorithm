// Linear Search an array - If element found print the index, else -1

function linearSearch(input, element) {
    let arr = [...input];
    let isExist = -1;

    for(let ar in arr){
        if(arr[ar] === element){
             isExist = `Index of ${element} is ${ar}`;
        }
    }

    console.log(isExist)
}

linearSearch([10, 20, 30, 12, 40, 50], 12)