const stringSearch = (long, short) => {
    let counter = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i + j]) break;
            else if(j === short.length - 1) counter++;
        }
    }
    return counter;
}

console.log(stringSearch('omgalexisgwomgwoerubeyomgomgasocazaresmdomgasomgdomgomg', 'omg'));