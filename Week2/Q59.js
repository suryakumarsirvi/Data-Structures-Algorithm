// Array left Rotation by 1
// First element ko uthao → last me chipka do → baaki sab left shift ho jayenge

function rotationByOne(...array){
    let arr = array;
    let rotation = arr[0];
    let newArr = [];

    for(let i = 1; i <= arr.length - 1; i++){
        newArr.push(arr[i]);
    }

    newArr.push(rotation);

    console.log(newArr)

}

rotationByOne(10, 20, 30, 40, 50);