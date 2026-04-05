// Keep Multiplying Found Values by Two
// arr = [5, 3, 6, 1, 12]
// original = 3


function multiFound(arr, k) {
    let set = new Set(arr);
    let og = k;

    while (set.has(og)) {
        og *= 2;
    }

    console.log(og);
}

multiFound([3, 12, 6], 3)