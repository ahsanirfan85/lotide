// ASSERTEQUAL FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};


// TAIL FUNCTION
const tail = function(array) {
  const newArray = array.slice(1);
  return newArray;
};

// TEST CASES

const arrayToTest = [1, 2, 3, 4];
const testResultArray = tail(arrayToTest);

for (let i  = 1; i < arrayToTest.length; i++) {
  assertEqual(testResultArray[i - 1],arrayToTest[i]);
}

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: An array with only one element should yield an empty array for its tail
const wordsOne = tail([1]);  // We need to capture the return value to check its length. It's length should be zero
assertEqual(wordsOne.length, 0);

// Test Case: An empty array should yield an empty array for its tail
const wordsTwo = tail([]);  // We need to capture the return value to check its length. It's length should be zero
assertEqual(wordsTwo.length, 0);