function checkNumberOrString(argument) {

    if (typeof argument === 'string' ) {
        return 'string';
    }

    if (typeof argument === 'number' && !Number.isNaN(argument)) {
        return 'number';
    };
    return undefined;
};

module.exports = checkNumberOrString;
