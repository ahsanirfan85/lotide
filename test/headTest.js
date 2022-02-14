const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([5,6,7]), 5); // An array of integers
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // An array of strings
assertEqual(head([5]), 5); // A single-element array
assertEqual(head([]), undefined); // An empty array