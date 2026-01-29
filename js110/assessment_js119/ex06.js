/*
Create a function that takes a string argument and returns a hash in which the keys represent the lowercase letters in the string, 
and the values represent how often the corresponding letter occurs in the string.

PROBLEM
- inputs: string argument
- output: hash in which the keys represent the lowercase letters in the string

explicit rules:
- 

- questions:
  * hash? assume an object with keys

EXAMPLES

DATA STRUCTURES
- objects

ALGORITHM
- SET hash = empty object

- LOOP through chars in string
- IF char is lower case letter
  - IF char exists in hash
      increase char count by 1
  - ELSE
      SET hash[char] = 1;

RETURN hash


*/

function countLetters(inputString) {
  let hash = {};
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';

  for (let currentChar of inputString) {
    if (!lowerCaseLetters.includes(currentChar)) {
      continue;
    }
    
    if (Object.keys(hash).includes(currentChar)) {
      hash[currentChar] += 1;
    } else {
      hash[currentChar] = 1;
    }
  }

  return hash;
}


const p = console.log;
const objeq = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (! keys2.includes(key)) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

let expected = {'w': 1, 'o': 2, 'e': 3, 'b': 1, 'g': 1, 'n': 1};
p(objeq(countLetters('woebegone'), expected));

expected = {'l': 1, 'o': 1, 'w': 1, 'e': 4, 'r': 2,
            'c': 2, 'a': 2, 's': 2, 'u': 1, 'p': 2};
p(objeq(countLetters('lowercase/uppercase'), expected));

expected = {'u': 1, 'o': 1, 'i': 1, 's': 1};
p(objeq(countLetters('W. E. B. Du Bois'), expected));

p(objeq(countLetters('x'), {'x': 1}));
p(objeq(countLetters(''), {}));
p(objeq(countLetters('!!!'), {}));