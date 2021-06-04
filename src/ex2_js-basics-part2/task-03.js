function exploreArray(array) {
    const outputArray = {
        even: 0,
        odd: 0,
        zero: 0,
    };
    
    array.forEach(item => {
        if (typeof item !== 'number' || Number.isNaN(item)) {
            return; 
        }

        if (item === 0) {
            outputArray.zero += 1;
            return; 
        }

        if (item % 2 === 0) {
            outputArray.even += 1;
            return; 
        }

        outputArray.odd += 1;
    });

    return [outputArray.even, outputArray.odd, outputArray.zero];
}

module.exports = exploreArray;