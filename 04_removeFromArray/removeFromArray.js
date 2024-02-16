const removeFromArray = function(array, ...args) {
    let newArr = [];
    array.forEach(checkAll);
    function checkAll(num) {
        if (!args.includes(num)){
            newArr.push(num);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;