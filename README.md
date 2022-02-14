# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahsanirfan/lotide`

**Require it:**

`const _ = require('@ahsanirfan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Checks if given arrays are equal and returns a console.log message telling the user if the arrays are equal or not. This function is for checking the results of a function that returns an array and comparing it against the expected return value.
* `assertEqual(...)`: Checks if two values are equal or not and returns a console.log message telling the user if the values are equal or not. This function is for checking the results of a function that a primitve value and comparing it against the expected return array.
* `assertObjectsEqual(...)`: Checks if given objects are equal and returns a console.log message telling the user if the objects are equal or not. This function is for checking the results of a function that returns an object and comparing it against the expected return object.
* `countLetters(...)`: Counts letters in a given string.
* `countOnly(...)`: Counts values in an array given a condition.
* `eqArrays(...)`: Checks if given arrays are equal and returns 'true' or 'false' depending on whether or not the arrays are equal.
* `eqObjects(...)`: Checks if given objects are equal and returns 'true' or 'false' depending on whether or not the objects are equal.
* `findKey(...)`: Returns a key from an object that meets a given condition.
* `findKeyByValue(...)`: Returns a key from an object given the value contained in that key.
* `flatten(...)`: Returns one array when given a nested array.
* `head(...)`: Returns the first value of a given array.
* `letterPositions(...)`: Returns the index of the position of a letter in a given string.
* `map(...)`: Maps an array to another array.
* `middle(...)`: Returns the middle value of a given array. Returns two values if the length of the given array is an even number. Values are returned as an array.
* `tail(...)`: Returns all the values of a given array (as another array) except the first value.
* `takeUntil(...)`: Takes in an array, loops through it until a given condition is met and returns that values looped through as an array.
* `without(...)`: Takes in a source array and an array which contains the values to be removed from the source array. Returns an array with values from the source array but without the values in the second array.