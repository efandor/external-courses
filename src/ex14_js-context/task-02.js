function Hangman(word) {
  this.correctLetters = word.toLowerCase().split('');
  this.wrongLetters = [];
  this.step = 6;
  this.output = [];

  this.correctLetters.forEach(() => this.output.push('_'));

  this.guess = (letter) => {
    let isIncludedLetter = false
    

    if (this.step < 1) {
      return 'Game over';
    }

    this.correctLetters.forEach((item, index) => {
      if (letter.toLowerCase() === item) {
        this.output[index] = letter.toLowerCase();
        isIncludedLetter = true;
        return;
      }

      return;
    });

    if (isIncludedLetter) {
      return `${this.output.join('')}`;
    }

    this.wrongLetters.push(letter.toLowerCase());
    this.step -= 1;

    return `wrong letter, errors left ${this.step} | ${Array.from(new Set(this.wrongLetters)).join(',')}`;
  }

  this.getGuessedString = () => {
    return this.output.join('');
  }

  this.getErrorsLeft = () => {
    return this.step;
  }

  this.getWrongSymbols = () => {
    return Array.from(new Set(this.wrongLetters));
  }

  this.getStatus = () => {
    return `${this.output.join('')} | errors left ${this.step}`;
  }

  this.startAgain = (newWord) => {
    this.word = newWord.toLowerCase();
    this.correctLetters = this.word.split('');
    this.wrongLetters = [];
    this.step = 6;

    return this;
  }
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
