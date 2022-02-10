// TESTING FUNCTIONS
// TESTING FUNCTION - PART I - EQARRAYS FUNCTION
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

// TESTING FUNCTION - PART II - ASSERTARRAYSEQUAL FUNCTION
const assertArraysEqual = function(actualArray, expectedArray) {
  let finalMessage = `✅✅✅ Assertion With Array Output Passed: ${actualArray} === ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
  }
  console.log(finalMessage);
};

// MAP FUNCTION
const map = function (array, callback) {
  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

// TEST CASES:
// 1) CAN FUNCTION MANIPULATE STRINGS?
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// 2) CAN FUNCTION MANIPULATE NUMBERS?
const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, number => (number * number) + 1);
assertArraysEqual(results2, [2, 5, 10, 17, 26]);

// 3) CAN FUNCTION DEAL WITH CONDITIONALS
const testArray = [1, 2, 3, 4, 5];
const results3 = map(testArray, testElement => {return testElement > 3});
assertArraysEqual(results3, [false, false, false, true, true]);