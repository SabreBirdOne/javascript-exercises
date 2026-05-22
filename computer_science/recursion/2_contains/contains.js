const contains = function(thing, target) {
    console.log(thing, typeof thing);
    if (thing !== Object(thing)){
        if (Number.isNaN(target)){
            return Number.isNaN(thing);
        }
        return thing === target;
    }
    
    if (typeof thing === 'object'){
        if (thing === target) return true;
        for (const item of Object.values(thing)){
            if (contains(item, target)) return true;
        }
        return false;
    }
};
  
// Do not edit below this line
module.exports = contains;
