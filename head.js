// ASSERTEQUAL FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};

// HEAD FUNCTION
const head = function(array) {
  const firstElement = array[0];
  return firstElement;
}

assertEqual(head([5,6,7]), 5); // An array of integers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // An array of strings
assertEqual(head([5]), 5); // A single-element array
assertEqual(head([]), undefined); // An empty array