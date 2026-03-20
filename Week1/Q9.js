// Accept the three sides of triangle and calculate the area using Heron's formula

// area of triangle = 1/2 * base * height

// Heron's formula

// semiperameter = 1/2(a+b+c);

// area=in root s(s-a)* (s-b)*
// (s-c)

function AreaOfTriangle(a, b, c) {
    const s = (a + b + c) / 2;

    const area = Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)));

    console.log(area)
}

AreaOfTriangle(12, 25, 19); // 109



