function exploreArray(array) {
    const outputArray = [0, 0, 0];
    for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] === 'number' && !Number.isNaN(array[i])) {
            if (array[i] === 0) {
                outputArray[2] += 1; 
            } else if (array[i] % 2 === 0) {
                 outputArray[0] += 1;
            } else outputArray[1] += 1;
        };
    };
    return outputArray;
};

module.exports = exploreArray;