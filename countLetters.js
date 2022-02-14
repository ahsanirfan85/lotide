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

module.exports = countLetters;