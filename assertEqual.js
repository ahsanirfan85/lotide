// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let finalMessage = '';
  let passOrFail = "🛑🛑🛑 Assertion Failed";
  let equalOrNot = "!==";

  if (actual === expected) {
    passOrFail = "✅✅✅ Assertion Passed";
    equalOrNot = "===";
  }

  finalMessage = passOrFail + ": " + actual + " " + equalOrNot + " " + expected;
  console.log(finalMessage);
};

// TEST CODE
assertEqual("bootcamp", "bootcamp"); // Identical strings
assertEqual("Lighthouse Labs", "bootcamp"); // Non-identical strings
assertEqual(1, 1); // Identical numbers
assertEqual(1, 2); // Non-identical numbers