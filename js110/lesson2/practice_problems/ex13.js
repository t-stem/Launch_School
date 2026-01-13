/*
Similar to the previous question, you need to create a deep copy of the following nested object.
*/

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

function deepCopy(inputObj) {
  let copiedObj = {};

  Object.keys(inputObj).forEach(key => {
    copiedObj[key] = inputObj[key].slice();
  })
  
  return copiedObj;
}

console.log(deepCopy(truthiness));


function deepCopy2(inputObj) {
  let deepCopiedObj = {};

  for (key in inputObj) {
    deepCopiedObj[key] = [...inputObj[key]]; // alternative syntax    
  }
  return deepCopiedObj;
}

console.log(deepCopy2(truthiness));