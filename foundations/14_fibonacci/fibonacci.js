const fibonacci = function(n) {
    n = +n;
    if (n < 0) return "OOPS";
    
    let current = 1;
    let firstPrev = 1;
    let secondPrev = 0;
    
    if (n === 0) return secondPrev;

    for (let i = 2; i <= n; i++) {
        current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
