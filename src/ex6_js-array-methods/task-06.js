function reducePolyfil(array, callback, initialValue) {
  let reduceArray;
  let accumulator;
  let previousValue;

  if (initialValue) {
    previousValue = initialValue;
    reduceArray = [ ...array];
  } else {
    previousValue = array[0];
    reduceArray = array.slice(1, array.length);
  }

  for (let i = 0; i < reduceArray.length; i += 1) {
    accumulator = callback(previousValue, reduceArray[i], i, reduceArray);
    previousValue = accumulator;
  };

  return accumulator;
};

module.exports = reducePolyfil;
