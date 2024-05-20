const merge = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    
    while(arr1.length > i){
        result.push(arr1[i]);
        i++;
    }

    while(arr2.length > j){
        result.push(arr2[j]);
        j++
    }

    return result;
}

const mergeSorting = (arr) => {
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let left = mergeSorting(arr.slice(0, middle));
    let right = mergeSorting(arr.slice(middle));
    
    return merge(left, right); 
}

console.log(mergeSorting([100,24,10,76,73,1]));