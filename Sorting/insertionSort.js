const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0 && arr[j] < arr[j-1]; j--){
            let temp = arr[j-1];
            arr[j-1] = arr[j]
            arr[j] = temp;
        }
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));
