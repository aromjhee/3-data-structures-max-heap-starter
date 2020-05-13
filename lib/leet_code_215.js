// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.
var findKthLargest = function(nums, k) {
    let sorted = heapSort(nums);
    return sorted[sorted.length - k]
};

function heapSort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        heapify(array, array.length, i);
    }

    // keep deleting the max until the heap is empty
    for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(array, 0, endOfHeap);
        heapify(array, endOfHeap, 0)
    }

    return array;
}

function heapify(array, n, i) {
    let leftIdx = 2 * i + 1;
    let rightIdx = 2 * i + 2;
    let leftVal = array[leftIdx];
    let rightVal = array[rightIdx];

    if (leftIdx >= n) leftVal = -Infinity;
    if (rightIdx >= n) rightVal = -Infinity;

    if (array[i] > leftVal && array[i] > rightVal) return;

    let swapIdx;
    if (leftVal < rightVal) {
        swapIdx = rightIdx;
    } else {
        swapIdx = leftIdx;
    }
    swap(array, i, swapIdx);
    heapify(array, n, swapIdx);
}

function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));