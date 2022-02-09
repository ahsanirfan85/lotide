// TESTING FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};

// FINDKEYBYVALUE FUNCTION
const findKeyByValue = function(object, value) {
  let keyFound;
  let keys = Object.keys(object);

  for (const element of keys) {
    if (object[element] === value) {
       keyFound = element;
    }
    
  }
  return keyFound;
};

// TEST CASES

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);