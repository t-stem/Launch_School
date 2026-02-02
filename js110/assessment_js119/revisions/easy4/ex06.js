/*
Write a function that takes a string consisting of zero or more space separated words and
returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

PROBLEM: 
- Input: string consisting of zero or more space separated words
- Output: returns an object that shows the number of words of different sizes

Explicit rules:
- Words consist of any sequence of non-space characters.

Implicit rules:
- Include punctuation in word length

EXAMPLES:
- 

DATA STRUCTURES:
- [words]
- [lengths]
- {length: count}

ALGORITHM:
- SET words = [words] (split with delimiter ' ')
- SET lengths = [lengths]
- SET counts = {}
- Loop through lengths
  * IF keys of counts include currLength
    - Increase count by 1
  * ELSE
    - Add new key for currLength
    - SET count for currLength to 1
- RETURN counts

*/

function wordSizes2(inputStr) {
  if (inputStr.length === 0) return {};
  
  let words = inputStr.split(' ');
  let lengths = words.map(word => word.length);
  let lenCounts = {};

  for (let lenIndex = 0; lenIndex < lengths.length; lenIndex += 1) {
    let currLen = lengths[lenIndex];

    if (Object.keys(lenCounts).includes(currLen)) {
      lenCounts[currLen] += 1;
    } else {
      lenCounts[currLen] = 1;
    }
  }

  return lenCounts;
}

function wordSizes(inputStr) {
  let words = inputStr.split(' ');
  let wordLengths = words.map(word => word.length);
  let lenCounts = {};

  for (let currLen of wordLengths) {
    if (currLen === 0) continue;
    
    lenCounts[currLen] = (lenCounts[currLen] || 0) + 1;
  }

  return lenCounts;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}