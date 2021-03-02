function checkEqualElements(array) {
    array.sort();
    return array[0] === array[array.length - 1] ? true : false;
};

module.exports = checkEqualElements;
