/*
Create a function that takes two string arguments and returns the number of times that the second string occurs in the first string. 

Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.

You may assume that the second argument is never an empty string.

PROBLEM:
- Input: two string arguments 
- Output:  the number of times that the second string occurs in the first string


Explicit rules:
- Note that overlapping strings don't count: 'babab' contains 1 instance of 'bab', not 2.
- You may assume that the second argument is never an empty string.

EXAMPLES:

DATA STRUCTURES
- [substrings]
- {substring: count}
- {substring: valid count}
- [chars]

ALGORITHMS
- IF string doesn't include substring
  Return 0

- WHILE currentString includes substring
  - Replace substring within currentString with placeholder
  - Increase counter by 1

Return counter
*/

function countSubstrings(mainString, substring) {
  if (!mainString.includes(substring)) {
    return 0;
  }

  let currentString = mainString;
  let counter = 0;

  while (currentString.includes(substring)) {
    currentString = currentString.replace(substring, '*'.repeat(substring.length));
    counter += 1;
  }

  return counter;
}

const p = console.log;
p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);