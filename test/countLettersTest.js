const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns {a: 2, h: 1, s: 1, n: 1} for 'AHSAN'", () => {
    assert.deepEqual(countLetters("AHSAN"), {a: 2, h: 1, s: 1, n: 1});
  });
});