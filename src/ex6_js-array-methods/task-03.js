function everyPolyfil(array, callback) {
  let isTrue = true;

  for (let i = 0; i < array.length; i += 1) {
    isTrue = callback(array[i], i, array) ? isTrue : false;
  }

  return isTrue;
};

module.exports = everyPolyfil;
