const selectionSort = (arr) => {
    let minNum;
    for(let i = 0; i < arr.length; i++){
        minNum = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minNum]) minNum = j;
        }
        if(minNum !== i){
            let temp = arr[i];
            arr[i] = arr[minNum];
            arr[minNum] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([1,5,2,4,3]));