function requiredBlocks(lengthPriorLayer) { // length will be equal to the layer number
  return (lengthPriorLayer + 1) ** 2;
}

function calculateLeftoverBlocks(availableBlocks) {
  const TOP_LAYER = 0; // fictional layer to accomodate input of availableBlocks = 0

  for (let layer = TOP_LAYER; requiredBlocks(layer) <= availableBlocks; layer += 1) { // layer number is equal to the required length of its sides
    availableBlocks -= requiredBlocks(layer);
  }

  return availableBlocks;
}


/* Test cases requiredBlocks
console.log(requiredBlocks(0)); // 1
console.log(requiredBlocks(1)); // 4
console.log(requiredBlocks(2)); // 9
console.log(requiredBlocks(3)); // 16
*/

// Test cases calculateLeftoverBlocks
console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true