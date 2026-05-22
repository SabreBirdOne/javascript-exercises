const pascal = function(n) {
  if (n === 0 || n === 1) return [1];
  
  let arr = [];

  const template = [0].concat(pascal(n - 1)).concat([0]);

  // from second element of template to the end, 
  // push the sum of current and previous element to arr

  for (let i = 1; i < template.length; i++) {
    arr.push(template[i - 1] + template[i]);
  }

  return arr;
};
  
// Do not edit below this line
module.exports = pascal;
