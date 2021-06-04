function checkProtoProperty(property, object) {
    return object.__proto__[property];
}

module.exports = checkProtoProperty;
