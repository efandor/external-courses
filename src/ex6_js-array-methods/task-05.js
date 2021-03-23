function mapPolyfil(array, callback) {
  const mapArray = [];

  for (let i = 0; i < array.length; i += 1) {
    mapArray.push(callback(array[i], i, array));
  };

  return mapArray;
};

module.exports = mapPolyfil;
