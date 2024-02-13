const repeatString = function(inputStr, numberTimes) {
    let result = '';
    if (numberTimes < 0) {
        result = 'ERROR';
    } else {
        for (let x = 0; x < numberTimes; x++) {
            result = result.concat(inputStr);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
