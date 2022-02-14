const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("return [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] & x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  it("return [ 'I\'ve', 'been', 'to', 'Hollywood' ] for ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'] & x => x === ','", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  it("return [] for [] & x => x < 0", () => {
    assert.deepEqual(takeUntil([], x => x < 0), []);
  });
  it("return [1, 2, 3, 4, 5] for [1, 2, 3, 4, 5] & x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4, 5], x => x < 0), [1, 2, 3, 4, 5]);
  });
});

// // TESTING

// // TEST #1: TESTING CONDITION X < 0 ON AN ARRAY OF NUMBERS
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

// // TEST #2: TESTING CONDITION X === ',' ON AN ARRAY OF STRINGS
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// // TEST #3: EMPTY ARRAY WITH ANY TESTING CONDITION
// const data3 = [];
// const results3 = takeUntil(data3, x => x < 0);
// assertArraysEqual(results3, []);

// // TEST #4: ARRAY OF NUMBERS WHERE NO ELEMENT MEETS THE CONDITION
// const data4 = [1, 2, 3, 4, 5];
// const results4 = takeUntil(data4, x => x < 0);
// assertArraysEqual(results4, [1, 2, 3, 4, 5]);