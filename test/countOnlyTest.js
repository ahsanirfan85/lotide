const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns {Jason: 1, Fang: 2} for ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'] & { Jason: true, Karima: true, Fang: true, Agouhanna: false }", () => {
    assert.deepEqual(countOnly(["Karl", 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), {Jason: 1, Fang: 2});
  });
});