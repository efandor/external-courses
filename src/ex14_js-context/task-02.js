function Hangman(word) {
  this.correctLetters = word.toLowerCase().split('');
  this.wrongLetters = [];
  this.step = 6;
  this.output = [];

  this.correctLetters.forEach(() => this.output.push('_'));

  this.guess = (letter) => {
    let isIncludedLetter = false;
    
    if (this.step < 1) {
      console.log('Game over');
      return this;
    }

    this.correctLetters.forEach((item, index) => {
      if (letter.toLowerCase() === item) {
        this.output[index] = letter.toLowerCase();
        isIncludedLetter = true;
        return;
      }
    });

    if (isIncludedLetter) {
      console.log(`${this.output.join('')}`);
      return this;
    }

    this.wrongLetters.push(letter.toLowerCase());
    this.step -= 1;

    console.log(`wrong letter, errors left ${this.step} | ${this.wrongLetters.join(',')}`);

    return this;
  }

  this.getGuessedString = () => {
    return this.output.join('');
  }

  this.getErrorsLeft = () => {
    return this.step;
  }

  this.getWrongSymbols = () => {
    return this.wrongLetters;
  }

  this.getStatus = () => {
    return `${this.output.join('')} | errors left ${this.step}`;
  }

  this.startAgain = (newWord) => {
    this.correctLetters = newWord.toLowerCase().split('');
    this.wrongLetters = [];
    this.step = 6;
    this.output = [];

    this.correctLetters.forEach(() => this.output.push('_'));

    return this;
  }
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
