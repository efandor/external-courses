function addPropertyToObject(property, object) {

    let copyOfObject = object;

    if (!object.hasOwnProperty(property)) {
      copyOfObject[property] = 'new';
    }

    return object;
}

module.exports = addPropertyToObject;
