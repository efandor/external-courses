function Calculator() {
  let state = 0;

  add = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when adding');
    }

    if (!isNaN(input)) {
      state += input;
    }

    return add;
  };

  subtract = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when subtracting');
    }

    if (!isNaN(input)) {
      state -= input;
    }

    return subtract;
  };

  divide = (input) => {
    if (input === Infinity && state === input) {
      throw new Error('Out of range when division');
    }

    if (input === 0) {
      throw new Error('Division by zero');
    }

    if (!isNaN(input)) {
      state /= input;
    }

    return divide;
  };

  multiply = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range');
    }

    if (!isNaN(input)) {
      state *= input;
    }

    return multiply;
  };

  getResult = () => {
    return state;
  };

  reset = () => {
    state = 0;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
};

const calculator = new Calculator();

module.exports = calculator;
