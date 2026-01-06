// Returns str repeated num times. ERROR if num is negative.
const repeatString = function(str, num) {
    if (num < 0) return 'ERROR'; 
    
    let returnString = '';
    for(let i = 0; i < num; i++){
        returnString += str;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
