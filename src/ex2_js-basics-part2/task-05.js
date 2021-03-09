function findMaxElement(array) {
   // return array.reduce((maxValue, currentValue) =>
    //         maxValue < currentValue ? currentValue : maxValue
    // ,0);
    return Math.max(...array);
}

module.exports = findMaxElement;
