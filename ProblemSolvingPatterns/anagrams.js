const anagrams = (word1, word2) => {
    const regex = /^[a-zA-Z]+$/

    if(word1.length !== word2.length) return false

    if(word1 === '' && word2 === '') return true

    if(!(regex.test(word1) && regex.test(word2))) return false

    let firstWordCounter = {};
    let secondWordCounter = {};

    for(let char of word1){
        firstWordCounter[char] = (firstWordCounter[char] || 0) + 1
    }
    for(let char of word2){
        secondWordCounter[char] = (secondWordCounter[char] || 0) + 1
    }

    for(let val in firstWordCounter){
        if(!(val in secondWordCounter)){
            return false
        }

        if(firstWordCounter[val] !== secondWordCounter[val]){
            return false
        }
    }

    return true
}

console.log(anagrams('', ''));