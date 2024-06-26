const pivot = (arr, start = 0, end = arr.length-1) => {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start+1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start to swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}
  
const quickSort = (arr, left = 0, right = arr.length-1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1);
        //right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
} 
             
console.log(quickSort([24,18,8,1]));