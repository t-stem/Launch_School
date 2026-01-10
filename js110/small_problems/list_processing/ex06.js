/* 
Write a function that returns a list of all palindromic substrings of a string. 

That is, each substring must consist of a sequence of characters that reads the same forward and backward. 

The substrings in the returned list should be sorted by their order of appearance in the input string. 

Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

*/

function isPalindrome1(inputString) {
  if (inputString.length <= 1) {
    return false;
  }

  let lowerBoundary = Math.floor(inputString.length / 2);
  let upperBoundary = Math.ceil(inputString.length / 2);
  let firstHalf = inputString.slice(0, lowerBoundary);
  let reversedSecondHalf = inputString.slice(upperBoundary).split("").reverse().join("");

  return firstHalf === reversedSecondHalf;
}

function isPalindrome(inputString) { // IMPROVEMENT: added simplified version
  return inputString.length > 1 && inputString === inputString.split("").reverse().join("");
}

/* test cases isPalindrome()
console.log(isPalindrome('madam') === true);
console.log(isPalindrome('lol') === true);
console.log(isPalindrome('abccba') === true);
console.log(isPalindrome('yaaaay') === true);
console.log(isPalindrome('meal') === false);
console.log(isPalindrome('yes') === false);
console.log(isPalindrome('stone') === false);
console.log(isPalindrome('fleets') === false);
*/

function substrings(inputString) {
  let substringsArray = [];

  for (let i = 0; i < inputString.length; i += 1) {
    for (let j = i + 1; j <= inputString.length; j += 1) {
      substringsArray.push(inputString.slice(i, j));
    }
  }

  return substringsArray;
}

/* test cases substrings
console.log(substrings('abcde'));
console.log(substrings('abc-de'));
*/

function palindromes(inputString) {
  return substrings(inputString).filter(substring => isPalindrome(substring));
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]


console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
