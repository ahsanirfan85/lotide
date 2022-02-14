const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("return [1,3] for [1,2,3,4] & [2,4]", () => {
    assert.deepEqual(without([1,2,3,4],[2,4]), [1,3]);
  });
  it("return [] for [1,2,3,4] & [1,2,3,4]", () => {
    assert.deepEqual(without([1,2,3,4],[1,2,3,4]), []);
  });
  it("return ['hello','goodbye','welcome','go away'] for ['hello','goodbye','welcome','go away'] & [2,4]", () => {
    assert.deepEqual(without(['hello','goodbye','welcome','go away'],[2,4]), ['hello','goodbye','welcome','go away']);
  });
  it("return ['goodbye','go away'] for ['hello','goodbye','welcome','go away'] & ['welcome','hello']", () => {
    assert.deepEqual(without(['hello','goodbye','welcome','go away'],['welcome','hello']), ['goodbye','go away']);
  });
  it("return [] for ['hello','goodbye','welcome','go away'] & ['hello','goodbye','welcome','go away']", () => {
    assert.deepEqual(without(['hello','goodbye','welcome','go away'],['hello','goodbye','welcome','go away']), []);
  });
});