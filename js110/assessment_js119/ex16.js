/*
Create a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits 
that occur more than once in the input string. 

You may assume that the input string contains only alphanumeric characters.

PROBLEM:
  - Inputs: string
  - Output: the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string

  - Explicit rules:
    * You may assume that the input string contains only alphanumeric characters.
    * case-insensitive 

EXAMPLES:

DATA STRUCTURES:
 - {case insensitive char, count}

ALGORITHM:
  - LOOP through chars in inputString
    * IF currentChar exists in tally
        increase count by 1
      ELSE
        set count to 1

  - Extract the values from the tally
  - Count the number of values > 1
  - Return count
*/

function distinctMultiples(inputString) {
  let tally = {};

  for (let currentChar of inputString) {
    currentChar = currentChar.toLowerCase();

    if (Object.keys(tally).includes(currentChar)) {
      tally[currentChar] += 1;
    } else {
      tally[currentChar] = 1;
    }
  }

  let counts = Object.values(tally);

  let multOccurChars = counts.filter(count => count > 1);

  return multOccurChars.length;
}
const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5