/* Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.

For instance, the word size of "it's" is 3, not 4.
*/

function cleanWordLength(word) {
  return word.replace(/[^a-z]/gi, "").length;
}


function wordSizes2(inputString) {
  let lengthCounts = {};

  inputString
  .split(" ")
  .forEach(word => {
    let len = cleanWordLength(word);
 
    if (len === 0) { // IMPROVEMENT: slightly adjusted control flow with return statement to escape .forEach() callback when length is zero and avoid repeting length check
      return;
    } else if (!lengthCounts[len]) {
      lengthCounts[len] = 1;
    } else {
      lengthCounts[len] += 1;
    }
  });
  
  return lengthCounts;
}

function wordSizes(inputString) { // added shorter alternative
  let lengthCounts = {};

  inputString
  .split(" ")
  .forEach(word => {
    let len = cleanWordLength(word);
 
    if (len === 0) { // IMPROVEMENT: slightly adjusted control flow with return statement to escape .forEach() callback when length is zero and avoid repeting length check
      return;
    } else {
      lengthCounts[len] = (lengthCounts[len] || 0) + 1; // IMPROVEMENT: added shorter logic
    }
  });
  
  return lengthCounts;
}


// Examples:
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}