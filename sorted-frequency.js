function sortedFrequency(arr, x) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let found = false;

    let count = 0;
    while (leftIdx <= rightIdx) {
        if (arr[leftIdx] === x) {
            count++;
            found = true;
            
        } 
            

        if (leftIdx === rightIdx) break;
        if (arr[rightIdx] === x) {
            count++;
            found = true;
        }
            

        leftIdx++;
        rightIdx--;
    }
    if (!found) return -1
    return count;
}

module.exports = sortedFrequency