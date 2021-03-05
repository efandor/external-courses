function findMaxElement(array) {
    return array.reduce((maxValue, currentValue) =>
             maxValue < currentValue ? currentValue : maxValue
    ,0);
}

module.exports = findMaxElement;
