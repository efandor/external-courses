function switchToCamelCase(string) {
    const arrayFromString = string.toLowerCase().split(' ');
    const changedArray = [];
    
    arrayFromString.forEach(word => { 
        changedArray.push(word[0].toUpperCase() + word.slice(1));
    });

    return changedArray[0][0].toLowerCase() + changedArray.join('').slice(1);
};

module.exports = switchToCamelCase;
