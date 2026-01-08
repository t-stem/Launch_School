function lengthValidConsonants(inputString) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
  let validConsontants = ''; // sequence of valid consonants
  let finalChar = inputString.length - 1;

  for (charIndex = 0; charIndex <= finalChar; charIndex += 1) {
    let char = inputString[charIndex];

    if (validConsontants === '' && charIndex === finalChar) {
      break; // ensures that the function only returns values >= 2, even if final char is a consonant and penultimate char isn't
    }

    if (char === " ") {
      continue; // ensures that spaces in the string are skipped
    }

    if (CONSONANTS.includes(char)) {
      validConsontants += char;

    } else if (validConsontants.length < 2) {
      validConsontants = ''; // ensures that the sequence of valid consonants is reset when a vowel occurs and the sequence of valid consonants is insufficient in length (i.e. less than 2), so that the loop can continue to look for a valid sequence further down the string

    } else {
      break; // ensures that the loop breaks when the string of valid consonants that is sufficient in length has been found (based on the assumption that each string only contains at most one valid sequence)
    }
  }

  return validConsontants.length;
}

/* Test cases countAdjacentConsonants
console.log(validAdjacentConsonants('dddaa'));
console.log(validAdjacentConsonants('ccaa'));
console.log(validAdjacentConsonants('month'));
console.log(validAdjacentConsonants('can'));
*/

function validConsonantsPerString(inputArray) {
  let consecutiveConsontantsPerString = {};
  
  for (string of inputArray) {
    consecutiveConsontantsPerString[string] = lengthValidConsonants(string);
  }

  return consecutiveConsontantsPerString;
}

/*
 Test cases adjacentConsonantsPerString
console.log(adjacentConsonantsPerString(['aa', 'baa', 'ccaa', 'dddaa']));
console.log(adjacentConsonantsPerString(['day', 'week', 'month', 'year']));
console.log(adjacentConsonantsPerString(['bar', 'car', 'far', 'jar']));
*/

function sortStringsByConsonants(inputArray) {

  let consonantCounts = validConsonantsPerString(inputArray);

  return inputArray.sort((a, b) => consonantCounts[b] - consonantCounts[a]); // negative return value of callback function indicates that a should come before b. This is when a has more valid consonants than b, so b - a < 0
}

//Test cases sortStringsByConsonants

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']


