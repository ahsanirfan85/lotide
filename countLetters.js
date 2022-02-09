// TESTING FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  console.log(finalMessage);
};

// countLetters function
const countLetters = function(string) {
  let results = {};

  for (const letter of string.toLowerCase()) {

    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

console.log(countLetters("AHSAN"));

// TESTING

const sentence = "mynameisahsanirfan";

result1 = countLetters(sentence);

assertEqual(result1["m"],2);
assertEqual(result1["y"],1);
assertEqual(result1["n"],3);
assertEqual(result1["a"],4);
assertEqual(result1["e"],1);
assertEqual(result1["i"],2);
assertEqual(result1["s"],2);
assertEqual(result1["h"],1);
assertEqual(result1["r"],1);