const removeFromArray = function(array, ...removeThese) {
    return array.filter(checkRemoval);

    function checkRemoval(currentElement) {
        for (const element of removeThese) {
            if (element === currentElement) {
                return false;
            } 
        }
        return true;
    }
    //return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
