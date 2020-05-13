// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if (array[idx] === undefined) return true;

  let leftIdx = idx * 2;
  let rightIdx = idx * 2 + 1;
  let leftChild = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
  let rightChild = array[rightIdx] === undefined ? -Infinity : array[rightIdx];

  return array[idx] > leftChild &&
        array[idx] > rightChild &&
        isMaxHeap(array, leftIdx) &&
        isMaxHeap(array, rightIdx);
  // if (array.length <= 1) return true;

  // for (let i = 1; i < array.length; i++) {
  //   let leftIdx = i * 2;
  //   let rightIdx = i * 2 + 1;
  //   let leftChild = array[leftIdx] === undefined ? -Infinity : array[leftIdx];
  //   let rightChild = array[rightIdx] === undefined ? -Infinity : array[rightIdx];
  //   let val = array[i];
  //   if (val > leftChild && val > rightChild) {
  //     continue;
  //   } else return false;
  // }

  // return true;
}


module.exports = {
  isMaxHeap
};
