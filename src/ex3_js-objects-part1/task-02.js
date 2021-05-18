function showKeysAndProperty(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            /* eslint-disable no-console */
            console.log(`${key}: ${object[key]}`);
            /* eslint-enable no-console*/
        }
    }

    return;
}

module.exports = showKeysAndProperty;
