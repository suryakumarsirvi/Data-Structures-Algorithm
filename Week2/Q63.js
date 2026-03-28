// Binary Search. If element found print the index, else -1

function binarySearch(input, searchVal) {
    let start = 0;
    let end = input.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(input[mid] === searchVal){
            return console.log(`${searchVal} is at index ${mid}`);
        }else if(searchVal < input[mid]){
            end = mid - 1;
        }else{
            start = mid + 1
        }
    }

    return console.log(`${searchVal} not found : -1`);
}

binarySearch([1, 2, 3, 4, 5], 7);