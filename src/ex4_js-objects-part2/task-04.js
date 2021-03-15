function findSubString(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
};

module.exports = findSubString;
