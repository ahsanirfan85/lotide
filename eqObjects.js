// ASSERTEQUAL FUNCTION
const assertEqual = function(actual, expected) {
  let finalMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;

  if (actual === expected) {
    finalMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }
  
  console.log(finalMessage);
};

// EQARRAYS FUNCTION
const eqArrays = function(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;        
    }
  }
  
  return true;
};

// EQOBJECTS FUNCTION
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if (object1Keys.length === object2Keys.length) {
    
    for (const key of object1Keys) {

      if (object1[key] !== object2[key]) {
        
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

          if (!eqArrays(object1[key], object2[key])) {
            return eqArrays(object1[key], object2[key]);
          }

        } else {

        return false;

        }
        
      } 

    }

    return true;

  } else {

    return false;

  }

};



// TEST CASES
// PRIMITIVE VALUES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// ARRAYS AS VALUE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);