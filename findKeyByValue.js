const findKeyByValue = function(object, value) {
  let keyFound;
  let keys = Object.keys(object);

  for (const element of keys) {
    if (object[element] === value) {
       keyFound = element;
    }
    
  }
  return keyFound;
};

module.exports = findKeyByValue;