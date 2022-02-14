const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.sameOrderedMembers(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.sameOrderedMembers(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5]), [3]);
  });
});