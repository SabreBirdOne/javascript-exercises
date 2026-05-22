const permutations = function(arr) {
    if (arr.length === 0 || arr.length === 1) return [arr];
    
    let perms = [];

    for (let i = 0; i < arr.length; i++){
        // Get permutations of remaining elements in arr
        const remaining = arr.toSpliced(i, 1);
        const remaining_perms = permutations(remaining);

        // Glue this element onto every permutation as resulting new_perm
        remaining_perms.forEach((rem_perm) => perms.push([arr[i]].concat(rem_perm)))
    }

    return perms;
};
  
// Do not edit below this line
module.exports = permutations;
