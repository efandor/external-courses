function Calculator() {
  this.state = 0;

  this.add = (input = 0) => {
    if (!isNaN(input)) {
      this.state += input;
    }
    
    return this.add;
  };

  this.subtract = (input) => {
    if (!isNaN(input)) {
      this.state -= input;
    }
    
    return this.subtract;
  };
  
  this.divide = (input = 1) => {
    if (!isNaN(input)) {
      this.state /= input;
    }
    
    return this.divide;
  };

  this.multiply = (input = 1) => {
    if (!isNaN(input)) {
      this.state *= input;
    }
    
    return this.multiply;
  };

  this.getResult = () => {
    return this.state;
  };
  
  this.reset = () => {
    this.state = 0;
  };
}

const calculator = new Calculator();

module.exports = calculator;
