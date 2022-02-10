// EQARRAYS FUNCTION
const eqArrays = function(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;        
    }
  }
  
  return true;
};

// EQOBJECTS FUNCTION
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

// ASSERTOBJECTSEQUAL FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let finalMessage = `✅✅✅ Assertion With Object Output Passed: ${inspect(actual)} === ${inspect(expected)}`;

  if (eqObjects(actual, expected) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Object Output Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(finalMessage);
};

// TESTING
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2},{b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2, c:3});