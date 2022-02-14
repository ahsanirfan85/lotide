const without = function(source, itemsToRemove) {
  let newArray = [];
  
  for (let i = 0; i < source.length; i++) {
    let shouldRemain = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        shouldRemain = false;
      }
    }
    if (shouldRemain === true) {
      newArray.push(source[i]);
    }
  }

  return newArray;
};

module.exports = without;