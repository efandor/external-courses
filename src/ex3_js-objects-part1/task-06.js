function deepCloneObject(object) {

    let deepClone = {};

    if (Array.isArray(object)) {
        deepClone = [];
    }

    for (let key in object) {
        if ((typeof object[key] === 'object') && object[key]) {
            deepClone[key] = deepCloneObject(object[key]);
        } else {
            deepClone[key] = object[key];
        }
    }
    
    return deepClone;
}

module.exports = deepCloneObject;
