/* 
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.
*/

function isPalindromicNumber(inputNumber) {
  let digitsString = [...String(inputNumber)];
  let digitsLength = digitsString.length;

  if (digitsLength === 1) {
    return true;
  } else {
  let firstHalfEnd = Math.floor(digitsLength / 2);
  let firstHalf = digitsString.slice(0, firstHalfEnd);

  let oddLength = digitsLength % 2 !== 0;
  let secondHalfStart = oddLength ? firstHalfEnd + 1 : firstHalfEnd;
  let reversedSecondHalf = digitsString.slice(secondHalfStart, digitsLength).reverse();
  
  let firstHalfString = firstHalf.join();
  let reversedSecondHalfString = reversedSecondHalf.join()

  return firstHalfString === reversedSecondHalfString;
  }
}

  // length 1 - 0, 1
  // length 2 - 1, 2
  // length 3 - 2, 3
  // legnth 4 - 2, 4
  // length 5 - 3, 5
  // length 6 - 3, 6






console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true