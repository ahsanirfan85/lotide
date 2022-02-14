const flatten = function(array) {
  let newArray = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      for (const item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
}

module.exports = flatten;