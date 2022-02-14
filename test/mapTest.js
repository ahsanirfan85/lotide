const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom'] & word => word[0]", () => {
    assert.deepEqual(map(['ground', 'control', 'to', 'major', 'tom'], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns [2, 5, 10, 17, 26] for [1, 2, 3, 4, 5] & number => (number * number) + 1", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], number => (number * number) + 1), [2, 5, 10, 17, 26]);
  });
  it("returns [false, false, false, true, true] for [1, 2, 3, 4, 5] & testElement => {return testElement > 3}", () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], testElement => {return testElement > 3}), [false, false, false, true, true]);
  });
});

// // TEST CASES:
// // 1) CAN FUNCTION MANIPULATE STRINGS?
// const words = ['ground', 'control', 'to', 'major', 'tom'];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// // 2) CAN FUNCTION MANIPULATE NUMBERS?
// const numbers = [1, 2, 3, 4, 5];
// const results2 = map(numbers, number => (number * number) + 1);
// assertArraysEqual(results2, [2, 5, 10, 17, 26]);

// // 3) CAN FUNCTION DEAL WITH CONDITIONALS
// const testArray = [1, 2, 3, 4, 5];
// const results3 = map(testArray, testElement => {return testElement > 3});
// assertArraysEqual(results3, [false, false, false, true, true]);