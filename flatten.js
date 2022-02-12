// TESTING FUNCTIONS

// EQARRAYS FUNCTION TO BE CALLED BY THE ASSERTEQUALARRAYS FUNCTION BELOW
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

// ASSERTARRAYSEQUAL
const assertArraysEqual = function(actualArray, expectedArray) {
  let finalMessage = `✅✅✅ Assertion With Array Output Passed: ${actualArray} === ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
  }
  console.log(finalMessage);
};

// FLATTEN FUNCTION
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

// TESTING
assertArraysEqual(flatten([1,[2,3],4,5]),[1,2,3,4,5]);
assertArraysEqual(flatten([]),[]);
assertArraysEqual(flatten([1,2,3,4,5]),[1,2,3,4,5]);