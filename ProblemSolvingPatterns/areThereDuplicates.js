/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

    Examples:

    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

const areThereDuplicates = (...args) => {
    if(args.length === 0) return false

    let charStorage = {}
    
    for(let val of args){
        charStorage[val] ? charStorage[val] += 1 : charStorage[val] = 1;
    }

    for(let val in charStorage){
        if(charStorage[val] !== 1 ) return true 
    }

    return false
}

console.log(areThereDuplicates('a', 'b', 'c'))

/*
    This is a one liner solution using a Set, a set can't have duplicate values inside

    function areThereDuplicates() {
        return new Set(arguments).size !== arguments.length;
    }
*/