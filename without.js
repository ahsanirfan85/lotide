const assertArraysEqual = function(actualArray, expectedArray) {
  let finalMessage = `✅✅✅ Assertion With Array Output Passed: ${actualArray} === ${expectedArray}`;

  if (actualArray.length !== expectedArray.length) {
    finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
  }

  for (let i = 0; i < actualArray.length; i++) {
    if (actualArray[i] !== expectedArray[i]) {
      finalMessage = `🛑🛑🛑 Assertion With Array Output Failed: ${actualArray} !== ${expectedArray}`;
    }
  }  

  console.log(finalMessage);
};

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

const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    let shouldRemain = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemain = false;
      }
    }
    if (shouldRemain === true) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

assertArraysEqual(without([1,2,3,4],[2,4]), [1,3]);
assertArraysEqual(without(["hello","goodbye","welcome","go away"],[2,4]), ["hello","goodbye","welcome","go away"]);
assertArraysEqual(without(["hello","goodbye","welcome","go away"],["welcome","hello"]), ["goodbye","go away"]);
assertArraysEqual(without([1,2,3,4],[1,2,3,4]), []);
assertArraysEqual(without(["hello","goodbye","welcome","go away"],["hello","goodbye","welcome","go away"]), []);

// Test case to make sure that the array passed into the function is not being modified by the function and returned. Instead it is returning a brand new array.
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);