/*

Remember The Munsters from earlier questions? For this problem, you are tasked with creating a deep copy of the munsters object, whose nested objects cannot be altered.

*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};


function deepCopyObj(obj) {
  let deepCopy = {};
  
  Object.keys(obj).forEach(key => {
    let subObj = obj[key];
    let copySubObj = {};
    Object.keys(subObj).forEach(subKey => {
      copySubObj[subKey] = subObj[subKey];
    })
    deepCopy[key] = copySubObj;
  })
  
  return deepCopy;
}

let copy = deepCopyObj(munsters);
console.log(copy);

munsters['herman']['age'] = 31;
munsters['lily']['gender'] = 'male';
munsters['grandpa']['age'] = 31;
munsters['eddie']['gender'] = 'female';
munsters['marilyn']['age'] = 31;

console.log(munsters);
console.log(copy)