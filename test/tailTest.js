const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.sameOrderedMembers(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
});