/*
Create a deep copy of the following nested array.
*/

const arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function deepCopy(inputArray) {
  return inputArray
    .map(element => {
      if (Array.isArray(element)){
        return element.slice();
      } else {
        let copiedObj = {};
        Object.keys(element).forEach(key => {
          copiedObj[key] = element[key].slice();
        });
        return copiedObj;
      }
    });
}

let copiedArray = deepCopy(arr);
console.log(copiedArray);
arr[0][0] = 'a';
arr[1][0] = 'yellow';
arr[2]['b'][0] = 1;
arr[2]['c'][0] = 2;
arr[2]['d'][0] = 3;
arr[3]['e'][0] = 7;
arr[3]['f'][0] = 5;
console.log(arr);
console.log(copiedArray)
