class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);
    let parent = this.array[parentIdx]

    let val = this.array[idx];
    if (val > parent) {
      [ this.array[idx], this.array[parentIdx] ] = [ this.array[parentIdx], this.array[idx] ]
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftChild = this.array[leftIdx] === undefined ? -Infinity : this.array[leftIdx];
    let rightChild = this.array[rightIdx] === undefined ? -Infinity : this.array[rightIdx];
    let val = this.array[idx];

    if (val > leftChild && val > rightChild) return;

    let swapIdx;
    if (leftChild > rightChild) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }
    [this.array[idx], this.array[swapIdx]] = [this.array[swapIdx], this.array[idx]]
    this.siftDown(swapIdx);
  }

  deleteMax() {
    if (!this.array[1]) return null;
    if (this.array.length === 2) return this.array.pop();

    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1);

    return max;
  }
}

let heap1 = new MaxHeap();
heap1.array = [null, 27, 30, 40, 20, 25, 16];
heap1.siftDown(1);
// [null, 40, 30, 27, 20, 25, 16];

module.exports = {
  MaxHeap
};
