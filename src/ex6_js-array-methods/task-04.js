function filterPolyfil(array, callback) {
  const filteredArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  };

  return filteredArray;
};

module.exports = filterPolyfil;
