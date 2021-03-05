function addPropertyToObject (property, object) {
    if (!object.hasOwnProperty(property)) {
       Object.defineProperty(object, property, {
        value: "new"
      });
    }

    return object;
}

module.exports = addPropertyToObject;
