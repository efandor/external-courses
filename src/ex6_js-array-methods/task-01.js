function slicePolyfil(array, begin = 0, end = array.length) {
    const slicedArray = [];
    let positiveBegin = (begin < 0) ? (array.length + begin) : begin;
    let positiveEnd = (end < 0) ? (array.length + end) : end;

    for (let i = 0; i < array.length; i += 1) {
      if ((i >= positiveBegin) && (i < positiveEnd)) {
        slicedArray.push(array[i]);
      }
    };
  
    return slicedArray;
};

module.exports = slicePolyfil;
