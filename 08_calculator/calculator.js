const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => {
    return sum + curr
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, curr) => {
    return product * curr
  }, 1)
};

const power = function(a, b) {
  num = a;
	for (let i=1; i < b; i++) {
    num *= a;
  }
  return num;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let num = 1;
	for (let i=a; i > 0; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
