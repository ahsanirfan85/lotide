const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CASES

// ONE OR TWO ARRAY ELEMENTS / SHOULD RETURN EMPTY ARRAY

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

// ODD NUMBER OF ARRAY ELEMENTS GREATER THAN TWO / SHOULD RETURN ONE ELEMENT ARRAY

assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

// EVEN NUMBER OF ARRAY ELEMENTS GREATER THAN TWO / SHOULD RETURN TWO ELEMENT ARRAY

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])