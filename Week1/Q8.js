// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)

// const CIFormula = P(1 + R/100)^T - P;

function CI(P, R, T) {
    const calc = Math.round(P * Math.pow(1 + R / 100, T) - P);
    console.log(calc)
}

CI(1000, 12, 2);