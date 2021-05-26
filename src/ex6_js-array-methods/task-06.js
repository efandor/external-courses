function reducePolyfil(array, callback, initialValue) {
  let i = 0;
  let accumulator = initialValue;

  if (!initialValue) {
    accumulator = array[0];
    i = 1;
  }

  for (i; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}

module.exports = reducePolyfil;
