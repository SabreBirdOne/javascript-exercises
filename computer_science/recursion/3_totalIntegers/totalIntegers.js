const totalIntegers = function(object) {
  
  if (Array.isArray(object)){
    return object.reduce((sum, element) => {
        if (Number.isInteger(element)) sum += 1;
        else sum += (totalIntegers(element) || 0);
        return sum;
    }, 0)
  }
  else if (typeof object === 'object' && object) {
    return totalIntegers(Object.values(object));
  }
  else {
    return undefined;
  }
};
  
// Do not edit below this line
module.exports = totalIntegers;
