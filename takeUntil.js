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

// TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  let newArray = [];

  for (const element of array) {
    if (callback(element)) {
      return newArray;
    }
    newArray.push(element);
  }

  return newArray;
};

// TESTING

// TEST #1: TESTING CONDITION X < 0 ON AN ARRAY OF NUMBERS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// TEST #2: TESTING CONDITION X === ',' ON AN ARRAY OF STRINGS
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// TEST #3: EMPTY ARRAY WITH ANY TESTING CONDITION
const data3 = [];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, []);

// TEST #4: ARRAY OF NUMBERS WHERE NO ELEMENT MEETS THE CONDITION
const data4 = [1, 2, 3, 4, 5];
const results4 = takeUntil(data4, x => x < 0);
assertArraysEqual(results4, [1, 2, 3, 4, 5]);