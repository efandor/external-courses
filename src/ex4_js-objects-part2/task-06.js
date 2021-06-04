function serUpperCaseToWords(string) {
    const arrayFromString = string.split(' ');
    const changedArray = [];

    arrayFromString.forEach(word => { 
        changedArray.push(word[0].toUpperCase() + word.slice(1));
    });

    return changedArray.join(' ');
}

module.exports = serUpperCaseToWords;
