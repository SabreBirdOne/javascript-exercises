const fibonacci = function(n) {
    n = +n;
    if (n < 0) return "OOPS";
    
    let firstPrev = 1;
    let secondPrev = 0;
    
    if (n === 0) return secondPrev;

    for (let i = 2; i <= n; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
