function insertSubString(string, subString, place) {
    const arrayFromString = string.split(' ');
    const changedArray = [];
  
    arrayFromString.forEach((word, index) => {
      changedArray.push(word);
      
      if (index === place) {
        changedArray.push(subString);
      }
    });

    return changedArray.join(' ');
};

module.exports = insertSubString;
