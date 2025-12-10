/* A double number is an even-length number whose left-side digits are exactly the same as its right-side digits.
 For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number, in which case, return the double number as-is.
*/

function twice(inputNumber) {
    const NUMBER_TO_STRING = String(inputNumber);
    const NUMBER_LENGTH = NUMBER_TO_STRING.length;
    const LAST_DIGIT_INDEX = NUMBER_LENGTH - 1;
    const INDEX_SEPARATOR = Math.ceil(LAST_DIGIT_INDEX / 2);
    const FIRST_HALF_DIGITS = NUMBER_TO_STRING.slice(0, INDEX_SEPARATOR);
    const SECOND_HALF_DIGITS = NUMBER_TO_STRING.slice(INDEX_SEPARATOR, NUMBER_LENGTH);

    if (NUMBER_LENGTH % 2 !== 0) { // not a double number
        return inputNumber * 2;
    } else if (FIRST_HALF_DIGITS === SECOND_HALF_DIGITS) {
       return inputNumber;
    } else {
        return inputNumber * 2;
    }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
