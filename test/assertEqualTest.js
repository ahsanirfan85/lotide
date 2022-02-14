const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("bootcamp", "bootcamp"); // Identical strings
assertEqual("Lighthouse Labs", "bootcamp"); // Non-identical strings
assertEqual(1, 1); // Identical numbers
assertEqual(1, 2); // Non-identical numbers