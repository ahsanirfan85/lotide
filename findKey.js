const findKey = function(object, callback) {
  for (const element of Object.keys(object)) {
    if (callback(object[element])) {
      return element;
    }
  }
};

module.exports = findKey;