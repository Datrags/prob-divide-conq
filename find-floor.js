// accepts a sorted array and a value. 
// returns the largest element in the array which is <= x
//if it doesnt exist, return -1
function findFloor(arr, x) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    let floor = -1
    while(leftIdx <= rightIdx) {
        let midIdx = (leftIdx + rightIdx) / 2

        if (arr[midIdx] == x) {
            return x;
        }
        else if (arr[midIdx] < x) {
            floor = arr[midIdx];
            leftIdx = midIdx + 1;
        }
        else{
            rightIdx = midIdx - 1;
        }
    }
    return floor;
}

module.exports = findFloor