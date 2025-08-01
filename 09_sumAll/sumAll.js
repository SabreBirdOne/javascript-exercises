// Takes 2 positive integers and return the sum of integers between the two integers (inclusive)
// Example: sumAll(1, 4) returns the sum of 1 + 2 + 3 + 4 which is 10
const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || Math.min(a,b) < 0){
        return 'ERROR';
    }

    let sum = 0;
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    
    for(let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
