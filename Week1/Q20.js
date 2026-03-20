// Shop discount

// QUESTION: A shop gives discount based on purchase amount:

// Above 5000 → 20% discount

// 2000 to 5000 → 10% discount

// Below 2000 → no discount

// Take amount from user and print final amount after discount.

function Discount(amt){

    const discountCalc = (percentage, amount)=> {
        return (percentage / 100) * amount;
    }

    if(amt >= 5000){
        const discount  = discountCalc(20, amt);
        const finalAmt = amt - discount;
        return console.log(`Discounted Amount: ${finalAmt}. 20% Discount`)
    }

    if(amt > 1999 && amt <= 4999){
        const discount  = discountCalc(10, amt);
        const finalAmt = amt - discount;
        return console.log(`Discounted Amount: ${finalAmt}. 10% Discount`)
    }

    if(amt <= 1999){
        return console.log(`No Discount Applicable.`)
    }
}

Discount(5000)