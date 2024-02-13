const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    if (firstNum < 0 || lastNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        sum = "ERROR";
    } else {
        if (firstNum > lastNum) [firstNum, lastNum] = [lastNum, firstNum];
        
        for (let index = firstNum; index <= lastNum; index++) {
            sum += index;
            
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
