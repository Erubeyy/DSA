const countUniqueValues = (array) => {
    let counter = 1;
    let leftNumber = 0;
    let rightNumber = 1;

    if(array.length === 0) return 0

    while(rightNumber < array.length){
        
        if(array[leftNumber] !== array[rightNumber]){
            counter++
        }

        leftNumber++
        rightNumber++
    }

    return counter
}

console.log(countUniqueValues([1,1,1,1,1,2]))