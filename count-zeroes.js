function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    let count = 0;
    while (leftIdx <= rightIdx) {
        if (arr[leftIdx] === 0){
            count++ 
        }

        if (leftIdx === rightIdx) break;

        if (arr[rightIdx] === 0) {
            count++;
        }


        leftIdx++;
        rightIdx--;
    }
    return count;
}

module.exports = countZeroes