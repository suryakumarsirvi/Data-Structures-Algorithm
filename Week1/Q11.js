// Find circumference and area of circle


// circumference = 2pir
// area = pir2

function calc(radius){
    const COC = (2 * Math.PI * radius).toFixed(2); // 50.27
    const AOC = Math.floor(Math.PI * Math.pow(radius, 2)); // 201

    console.log(`Circumference is ${COC} & Area of Circle is ${AOC}`);
}

calc(8)