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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3","4"], ["1", "2", "3"]);