function cutString(string, length) {
    return string.slice(0, length-1).concat('…');
};

module.exports = cutString;
