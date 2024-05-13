const bubbleSort = (arr) => {
    let resultArr = [...arr];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(resultArr[j] > resultArr[j+1]){
                let temp = resultArr[j];
                resultArr[j] = resultArr[j+1];
                resultArr[j+1] = temp; 
            }
        }
    }
    return resultArr;
}

console.log(bubbleSort([15,3,6,18,1,9,24,4,2]));