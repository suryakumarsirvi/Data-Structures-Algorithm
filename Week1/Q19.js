// Accept a year and check if it a leap year or not (google to find out what's a leap year)


function checkLeapYear(year) {
    if(year % 4 === 0 && year % 100 !== 0){

        if(year % 400 === 0){
            console.log('Leap Year')
        }
        
        console.log('Leap Year')

    }else if(year % 100 === 0){
        console.log('Not Leap Year')
    }
}

checkLeapYear(2000);