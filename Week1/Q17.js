// Accept a day number between 1-7 and print the corresponding day name.

const DayName = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satarday', 'Sunday'];


function dayName(num){
    if(!num || num <= 0){
        return console.log('Enter Valid Number.');
    }

    if(num >= 8){
        return console.log('Enter number between 1-7 only')
    }

    const res = DayName[(num - 1)]
    
    console.log(res)
}

dayName(2) // Tuesday