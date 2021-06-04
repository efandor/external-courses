function Calculator() {
  this.state = 0;

  this.add = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when adding');
    }

    if (!isNaN(input)) {
      this.state += input;
    }

    return this;
  }

  this.subtract = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range when subtracting');
    }

    if (!isNaN(input)) {
      this.state -= input;
    }

    return this;
  }

  this.divide = (input) => {
    if (input === Infinity && state === input) {
      throw new Error('Out of range when division');
    }

    if (input === 0) {
      throw new Error('Division by zero');
    }

    if (!isNaN(input)) {
      this.state /= input;
    }

    return this;
  }

  this.multiply = (input) => {
    if (input === Infinity) {
      throw new Error('Out of range');
    }

    if (!isNaN(input)) {
      this.state *= input;
    }

    return this;
  }

  this.getResult = () => {
    return this.state;
  }

  this.setState = (state = 0) => {
    this.state = state;

    return this;
  }

  this.fetchData = (callback) => {
    setTimeout(() => {
      this.state = 500;
      callback(500);
      }, 500);
  }

  this.reset = () => {
    this.state = 0;

    return this;
  }
}

const calculator = new Calculator();

module.exports = calculator;
