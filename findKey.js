// TESTING FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};

// FINDKEY FUNCTION
const findKey = function(object, callback) {
  for (const element of Object.keys(object)) {
    if (callback(object[element])) {
      return element;
    }
  }
};

// TESTING
// TEST CASE #1: RETURNING THE APPROPRIATE KEY WHEN CONDITION IS MET
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

// TEST CASE #2: RETURNING UNDEFINED WHEN CONDITION IS NOT MET
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined);