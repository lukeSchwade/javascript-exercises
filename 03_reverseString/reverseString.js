const reverseString = function(word) {
    let splitWord = [];
    for (let index = 0; index < word.length; index++) {
        splitWord.unshift(word.at(index));
        
    }
    return splitWord.join('');
};

// Do not edit below this line
module.exports = reverseString;