const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let newstr = str
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
    
    return newstr.join('') === newstr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
