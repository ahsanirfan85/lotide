// EQARRAYS FUNCTION TO BE CALLED BY THE ASSERTEQUALARRAYS FUNCTION BELOW (FOR TESTING)
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

// ASSERTARRAYSEQUAL FOR TESTING
const assertArraysEqual = function(actualArray, expectedArray) {
  let finalMessage = `✅✅✅ Assertion With Array Output Passed: ${actualArray} === ${expectedArray}`;

  if (eqArrays(actualArray, expectedArray) === false) {
    finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
  }
  console.log(finalMessage);
};

// MIDDLE FUNCTION
const middle = function(array) {
  let newArray = []
  
  if (array.length < 3) {
    newArray = []
  } else if ((array.length > 2) && ((array.length % 2) != 0)) {
    newArray.push(array[Math.floor(array.length/2)]);
  } else {
    newArray.push(array[(array.length/2) - 1]);
    newArray.push(array[array.length/2]);
  }
  return newArray;
};

// TEST CASES

// ONE OR TWO ARRAY ELEMENTS / SHOULD RETURN EMPTY ARRAY

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

// ODD NUMBER OF ARRAY ELEMENTS GREATER THAN TWO / SHOULD RETURN ONE ELEMENT ARRAY

assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

// EVEN NUMBER OF ARRAY ELEMENTS GREATER THAN TWO / SHOULD RETURN TWO ELEMENT ARRAY

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])