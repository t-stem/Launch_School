/* 
Create a function that takes a string argument and returns the character that occurs most often in the string. 

If there are multiple characters with the same greatest frequency, return the one that appears first in the string. 

When counting characters, consider uppercase and lowercase versions to be the same.

PROBLEM:
- input: string argument
- output: the character that occurs most often in the string

- explicit rules:
  * If there are multiple characters with the same greatest frequency, return the one that appears first in the string. 
  * When counting characters, consider uppercase and lowercase versions to be the same.

- implicit rules

- questions
  * what if the string is empty?
  * should spaces be counted as a char


EXAMPLES
- 

DATA STRUCTURES:
- object {char: count}

ALGORITHM
- SET charCoutns = empty object
- Loop through chars
  IF charCounts doesn't have currentChar
    SET charCounts[currentChar] = 1
  ELSE
    SET charCounts[currentChar] += 1

- Create array of object entries
- Sort the array by charCount
- Return char in first element of sorted array
*/

function countChars(str) {
  let tally = {};

  let charsArray = str
    .split(" ")
    .map(word => word.trim())
    .join("");


  for (let char of charsArray) {
    char = char.toLowerCase();
    
    if (Object.keys(tally).includes(char)) {
      tally[char] += 1;
    } else {
      tally[char] = 1;
    }
  }

  return tally;
}

function mostCommonChar(inputString) {
  let charCounts = countChars(inputString);

  let countsArray = Object.entries(charCounts);

  countsArray.sort((a, b) => b[1] - a[1]);

  return countsArray[0][0];
}



const p = console.log;
p(mostCommonChar('Hello World') === 'l'); // 
p(mostCommonChar('Mississippi') === 'i'); // i occurs first, equal count as s
p(mostCommonChar('Happy birthday!') === 'h'); // h occurs first, equal count as p
p(mostCommonChar('aaaaaAAAA') === 'a'); // all chars equal

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');
