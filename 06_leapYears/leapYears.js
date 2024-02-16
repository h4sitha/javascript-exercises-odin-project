const leapYears = function(year) {
    if (year%400 !== 0 && year%100 === 0) {
        return false;
    } else if (year%4 === 0){
        return true;
    } else {
        return false;
    }
};

// divisible by 4: true
// divisible by 100 and not 400: false
// % to find a remained for this

// Do not edit below this line
module.exports = leapYears;
