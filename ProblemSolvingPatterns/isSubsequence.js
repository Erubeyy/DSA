/*
    Write a function called isSubsequence which takes in two strings and checks whether 
    the characters in the first string form a subsequence of the characters in the second string. 
    In other words, the function should check whether the characters in the first string appear 
    somewhere in the second string, without their order changing.

    Examples:

    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
    Your solution MUST have AT LEAST the following complexities:

    Time Complexity - O(N + M)

    Space Complexity - O(1)
*/

const isSubsequence = (subStr, str) => {
    let subPointer = 0;
    let strPointer = 0;

    while(strPointer < str.length){
        if(subStr[subPointer] === str[strPointer]){
            subPointer++
            strPointer++
        }
        else{
            strPointer++
        }
    }

    return !(subPointer < subStr.length)
}

console.log(isSubsequence('abc', 'aqweqbqweqwce'));
