const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) {
            return eqArrays(object1[key], object2[key]);
          }
        } else {
          return false;
        }
      } 
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;