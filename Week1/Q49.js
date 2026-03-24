// Inverted Right Triangle Pattern


function invertTrin(num){
    for(let i = num; i >= 1; --i){
        let num = "";
        for(let j = 1; j <= i; j++){
            num += "* "
        }
        console.log(num)
    }
}

invertTrin(15)