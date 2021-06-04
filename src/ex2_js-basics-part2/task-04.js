function checkEqualElements(array) {
    return array.every(item => item === array[0])
}

module.exports = checkEqualElements;
