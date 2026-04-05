// Count Hills and Valleys in an Array

function hillsValleys(arr) {
    let unique = [arr[0]];
    let count = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            unique.push(arr[i])
        }
    }

    for (let i = 1; i < unique.length - 1; i++) {
        if (unique[i] > unique[i - 1] && unique[i] > unique[i + 1]) {
            console.log(`Hills: ${count}`);
        } else if (unique[i] < unique[i - 1] && unique[i] < unique[i + 1]) {
            console.log(`Valleys: ${count}`);
        }
        count++;
    }
}

hillsValleys([2, 4, 1, 1, 6, 5])