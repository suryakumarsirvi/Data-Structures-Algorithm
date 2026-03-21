// Sum of digits of a number (Ex: 936 = 18)


function Summee(num) {
    let sum = 0;
    const numArr = num.toString().split('');
    for(let ar of numArr){
        sum += Number(ar)
    }
    console.log(sum)
}

Summee(121) // 4