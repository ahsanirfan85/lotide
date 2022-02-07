// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};

// TEST CODE
assertEqual("bootcamp", "bootcamp"); // Identical strings
assertEqual("Lighthouse Labs", "bootcamp"); // Non-identical strings
assertEqual(1, 1); // Identical numbers
assertEqual(1, 2); // Non-identical numbers