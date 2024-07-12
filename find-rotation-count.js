function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx) {
        if (arr[leftIdx] <= arr[rightIdx]) return leftIdx;

        midIdx = Math.floor((leftIdx + rightIdx) / 2);
        nextidx = (midIdx + 1) % arr.length;
        previdx = (midIdx - 1 + arr.length) % arr.length;

        if (arr[midIdx] <= arr[nextidx] && arr[midIdx] <= arr[previdx])
            return midIdx;
        else if (arr[midIdx] >= arr[leftIdx])
            leftIdx = midIdx + 1;
        else
            rightIdx = midIdx - 1;
    }

    return -1;
}
module.exports = findRotationCount