// Returns a new array made from arr with values in the others rest parameter reomved.  
const removeFromArray = function(arr, ...others) {
    return arr.filter((item) => !others.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
