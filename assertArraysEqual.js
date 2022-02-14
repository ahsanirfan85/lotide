const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actualArray, expectedArray) {
  let finalMessage = `✅✅✅ Assertion With Array Output Passed: ${actualArray} === ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
  }
  console.log(finalMessage);
};

module.exports = assertArraysEqual;