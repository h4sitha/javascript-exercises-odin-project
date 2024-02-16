const reverseString = function(word) {
    let length = word.length;
    let letters = word.split("");
    let string = "";
    for (let i=length-1; i >= 0; i--) {
        string += letters[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
