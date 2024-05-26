const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((sum, current) => sum + current, 0);
};

const multiply = function(a) {
  return a.reduce((sum, current) => sum * current, 1);
};

const power = function(...a) {
	return Math.pow(a[0], a[1]);
};

const factorial = function(a) {
	const b = [];
  for (let i = 1; i <= a; i++){
    b.push(i);
  }
  return b.reduce((sum, curr) => sum * curr, 1);
};

b = factorial(1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
