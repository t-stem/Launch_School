/* 
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. 

Consider the words case sensitive e.g. ("suv" !== "SUV").
*/


function countOccurrences(inputArray) {
  let counts = {}

  for (let element of inputArray) {
    counts[element] = (counts[element] || 0) + 1; // IMPROVEMENT: shorter syntax instead of if else control flow
  }
  
  for (let key in counts) { // FIX: added let to declare key
    console.log(`${key} => ${counts[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1