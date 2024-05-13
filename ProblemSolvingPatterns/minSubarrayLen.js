/*
    Write a function called minSubArrayLen which accepts two parameters 
    - an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous subarray of which 
    the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

    Examples:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
    Time Complexity - O(n)

    Space Complexity - O(1)
*/

const minSubarrayLen = (arr, num) => {
    let pointer1 = 0
    let pointer2 = 1;
    let minLen = 0;

    for(let val of arr){
        if(val >= num) return 1;
    }

    let tempSum = arr[pointer1] + arr[pointer2]

    while(pointer1 < arr.length - 1){
        if(tempSum >= num && minLen === 0) minLen =  pointer2 - pointer1
        if(tempSum >= num && (pointer2 - pointer1) < minLen) minLen = pointer2 - pointer1 + 1;
        
        pointer2++
        
        tempSum += arr[pointer2];
 
        if(pointer2 === arr.length){
            pointer1++
            pointer2 = pointer1 + 1;
            tempSum = arr[pointer1] + arr[pointer2]
        }
    }

    return minLen;
}

console.log(minSubarrayLen([1,4,16,22,5,7,8,9,10],55))