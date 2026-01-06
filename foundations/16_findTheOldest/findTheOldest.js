const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        if (current.yearOfDeath === undefined || oldest.yearOfDeath === undefined) {
            return oldest.yearOfBirth < current.yearOfBirth ? oldest : current;
        }
        if (oldest.yearOfDeath - oldest.yearOfBirth < current.yearOfDeath - current.yearOfBirth){
            return current;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
