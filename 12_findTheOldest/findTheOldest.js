const findTheOldest = function(arr) {

    arrCopy = Array.from(arr);

    for (let person of arrCopy) {
        if (!person.yearOfDeath) {
            person.yearOfDeath = getAge();
        }
    }

    arrCopy.sort((a, b) => {
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });
    return arrCopy[(arrCopy.length-1)];

    function getAge() {
        return new Date().getFullYear();
    }
};

// Do not edit below this line
module.exports = findTheOldest;
