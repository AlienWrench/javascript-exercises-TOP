const add = function(a, b) {
  const solution = a + b;

  return solution;
};

const subtract = function(a, b) {
	const solution = a - b;

  return solution;
};

const sum = function(array) {
	let solution = 0;
  for (let i = 0; i < array.length; i++) {
    solution += array[i];
  }

  return solution;
};

const multiply = function(array) {
  let solution = 1;

  for (let i = 0; i < array.length; i++) {
    solution *= array[i];
  }

  return solution;

};

const power = function(a, b) {
  const solution = a ** b;
	return solution;
};

const factorial = function(num) {
	let solution = 1;

  if (num === 0 || num === 1) {

  } else {
    for (let i = num; i > 0; i--) {
      solution *= i;
    }
  }

  return solution;
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
