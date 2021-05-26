function deleteFrameSpaces(string) {
    if ((string[0] === ' ') && (string[string.length - 1] === ' ')) {
        return string.slice(1, -1);
    }
    
    return string;
}

module.exports = deleteFrameSpaces;
