const factorial = function(n) {
    if (Number.isInteger(n) && n >= 0){
        return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
    }
    return undefined;
};

// Do not edit below this line
module.exports = factorial;