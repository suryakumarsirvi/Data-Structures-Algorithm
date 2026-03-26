// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)


function greatest() {
    let data = [2, 96, 69, 77, 145, 20];
    let greaterVal = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] >= greaterVal) {
            greaterVal = data[i];
        }
    }

    console.log(greaterVal);

}

greatest();