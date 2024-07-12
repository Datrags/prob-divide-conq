function findRotatedIndex(arr, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    let idx = -1;
    while(leftIdx <= rightIdx) {
        if (arr[leftIdx] === x) return leftIdx;
        if (arr[rightIdx] === x) return rightIdx;

        leftIdx++;
        rightIdx--;
    }

    return idx;
}

module.exports = findRotatedIndex