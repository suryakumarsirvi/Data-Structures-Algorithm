// Bijli Bill

// QUESTION: Electricity bill is calculated based on units consumed:

// First 100 units → ₹5 per unit
// Next 100 units → ₹7 per unit
// Above 200 units → ₹10 per unit
// Take total units from user and print the total bill amount.


function calcBillAmt(units) {

    let totalBill = 0;

    if (units <= 0 || !units) {
        return console.log('Invalid Unit.');
    }

    if (units > 200) {
        totalBill += 100 * 5;              
        totalBill += 100 * 7;              
        totalBill += (units - 200) * 10;   
    } 
    else if (units > 100) {
        totalBill += 100 * 5;              
        totalBill += (units - 100) * 7;    
    } 
    else {
        totalBill += units * 5;            
    }

    console.log(totalBill);
}

calcBillAmt(210);
