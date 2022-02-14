const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'sci_fi' for { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'The Expanse'", () => {
    assert.deepEqual(findKeyByValue({ sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }, "The Expanse"), "sci_fi");
  });
  it("returns 'comedy' for { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'Brooklyn Nine-Nine'", () => {
    assert.deepEqual(findKeyByValue({ sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }, "Brooklyn Nine-Nine"), "comedy");
  });
  it("returns 'drama' for { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'The Wire'", () => {
    assert.deepEqual(findKeyByValue({ sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }, "The Wire"), "drama");
  });
  it("returns 'undefined' for { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'That 70s Shows'", () => {
    assert.deepEqual(findKeyByValue({ sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama:  "The Wire" }, "That 70s Show"), undefined);
  });
});