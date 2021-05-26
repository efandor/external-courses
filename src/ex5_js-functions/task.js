function Calculator() {
  let state = 0;

  const add = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when adding');
    }

    if (!isNaN(input)) {
      state += input;
    }

    return add;
  };

  const subtract = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when subtracting');
    }

    if (!isNaN(input)) {
      state -= input;
    }

    return subtract;
  };

  const divide = (input) => {
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

  const multiply = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range');
    }

    if (!isNaN(input)) {
      state *= input;
    }

    return multiply;
  };

  const getResult = () => {
    return state;
  };

  const reset = () => {
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
}

const calculator = new Calculator();

module.exports = calculator;
