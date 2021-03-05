function findPropertyInObject (property, object) {
    return object.hasOwnProperty(property) ? true : false;
}

module.exports = findPropertyInObject;
