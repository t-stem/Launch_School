/* Given two words, how many letters to you have to remove from them to make them anagrams?

PROBLEM
- Input: two word strings
- Output: number of letters that need to be removed to make them anagrams


EXAMPLE

DATA STRUCTURES
- {letter: count} for both words
- [letters of string] for both words
- 

ALGORITHM
- Split both words into letter arrays
- Loop through the longest array (from back to front!)
  * find index of currentChar in shorter array
  * IF index exists in shorter array
    remove char from both arrays from both arrays
- RETURN sum of both array lengths

*/

function anagramDifference(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let iterArr;
  let otherArr;

  if (arr1.length > arr2.length) {
    iterArr = arr1;
    otherArr = arr2;
  } else {
    iterArr = arr2;
    otherArr = arr1;
  }

  for (let i = iterArr.length - 1; i >= 0; i -= 1) {
    let currChar = iterArr[i];
    let otherIndex = otherArr.indexOf(currChar);

    if (otherIndex > -1) {
      iterArr.splice(i, 1);
      otherArr.splice(otherIndex, 1);
    }
  }

  return iterArr.length + otherArr.length;
}

console.log(anagramDifference('', '')); // 0
console.log(anagramDifference('a', '')); // 1
console.log(anagramDifference('', 'b')); // 1
console.log(anagramDifference('ab', 'ba')); // 0
console.log(anagramDifference('ab', 'cd')); // 4
console.log(anagramDifference('aab', 'a')); // 2
console.log(anagramDifference('codewars', 'hackerrank')); // 10
console.log(anagramDifference('zyxwv', 'azbycxdwev')); // 5
console.log(anagramDifference('house', 'mouse')); // 2
console.log(anagramDifference('shirt', 'third')); // 2
console.log(anagramDifference('', ''));
