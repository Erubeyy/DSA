/*
    Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

    Your solution MUST have the following complexities:

    Time: O(N)

    Sample Input:

    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

const sameFrequency = (num1, num2) => {
    const transNum1 = num1.toString();
    const transNum2 = num2.toString();

    if(transNum1.length !== transNum2.length) return false

    let numStorage = {};

    for(let val of transNum1){
        numStorage[val] ? numStorage[val] += 1 : numStorage[val] = 1
    }
    
    for(let val of transNum2){
        if(!numStorage[val]) return false

        numStorage[val] -= 1;
    }

    return true
}

console.log(sameFrequency(3514, 1345))