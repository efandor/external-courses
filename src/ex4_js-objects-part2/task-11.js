function countSymbol(string) {
    const includedLetters = {};

    string.split('').forEach(letter => {
      if (includedLetters.hasOwnProperty(letter)) {
        includedLetters[letter] = includedLetters[letter] += 1;
      }
      if (!includedLetters.hasOwnProperty(letter)) {
        includedLetters[letter] = 1;
      }
    });

    Object.entries(includedLetters).map(item => {
        console.log(`symbol ${item[0]}: included ${item[1]} times`)
      });
};

module.exports = countSymbol;
