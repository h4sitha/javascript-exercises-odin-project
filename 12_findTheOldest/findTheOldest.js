const findTheOldest = function(arr) {

    // arrCopy = Array.from(arr);

    // for (let person of arrCopy) {
    //     if (!person.yearOfDeath) {
    //         person.yearOfDeath = getAge();
    //     }
    // }

    // arrCopy.sort((a, b) => {
    //     return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    // });
    // return arrCopy[(arrCopy.length-1)];

    // function getAge() {
    //     return new Date().getFullYear();
    // }

    return arr.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
        if (oldestAge < currentAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    })

    function getAge (death, birth) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
