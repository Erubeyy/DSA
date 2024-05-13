function binarySearch(arr, value){
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.round(arr.length / 2 - 1);
   
//     while((right - left) > 1){
//         if(arr[middle] === value) return middle;
//         else if(arr[middle] < value){
//             left = middle;
//             middle += Math.round((right - left) / 2);
//         }else if(arr[middle] > value){
//             right = middle;
//             middle -= Math.round((right - left) / 2);
//         } 
//   } 

//   if(arr[left] === value) return left;
//   if(arr[right] === value) return right;

//   return -1;

    let left = 0;
    let right = arr.length - 1;
    let middle = Math.round(arr.length / 2);

    while(arr[middle] !== value){
        if(right - left === 1) return -1
        else if(arr[middle] < value){
            left = middle;
            middle += Math.round((right - left) / 2);
        }else if(arr[middle] > value){
            right = middle;
            middle -= Math.round((right - left) / 2);
        }
    } 
    return middle;
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 5));


/*
        MOST OPTIMAL SOLUTION

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        
        if (arr[middle] === value) {
            return middle; // Found the value
        } else if (arr[middle] < value) {
            left = middle + 1; // Search the right half
        } else {
            right = middle - 1; // Search the left half
        }
    }

    return -1; // Value not found
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 5));

*/