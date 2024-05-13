/*
    It is optimized to make only the necessary swaps until the arr
    i completily sorted, also, we start the first loop from end to beginning
    in that way the nested lopp (j) only performs (i)times so we can save us
    from comparing numbers that are already sorted at the end of the array.
*/

const optimizedBubbleSort = (arr) => {
    let swap;
    for(let i = arr.length; i > 0; i--){
        swap = true;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = false;
            }
        }
        if(swap) break;
    }
    return arr;
}

// console.log(optimizedBubbleSort([9,2,16,6,-1,4,13,-15,18,-7,0]));
console.log(optimizedBubbleSort([8,1,2,3,4,5,6]));
