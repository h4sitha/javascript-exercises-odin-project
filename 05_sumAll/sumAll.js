const sumAll = function(num1, num2) {

    if (num1 > 0 && num2 > 0 && typeof num1 ===
        "number" && typeof num2 === "number") {
        let lowNum = Math.min(num1, num2);
        let highNum = Math.max(num1, num2);

        let sum = 0;

        for(let i=lowNum; i <= highNum; i++) {
            sum += i;
        }

        return sum;
    } else {
        return "ERROR";
    }
};

// get two numbers
// add them and the numbers in between them to get the sum

// first find which is lowest and highest
// assign i to lowest and run until i equals to highest



// Do not edit below this line
module.exports = sumAll;
