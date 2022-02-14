const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let finalMessage = `✅✅✅ Assertion With Object Output Passed: ${inspect(actual)} === ${inspect(expected)}`;

  if (eqObjects(actual, expected) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Object Output Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(finalMessage);
};

module.exports = assertObjectsEqual;

// TESTING
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2},{b: 2, a: 1});
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2, c:3});