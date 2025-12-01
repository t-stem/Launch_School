/* In the modern era under the Gregorian Calendar, leap years occur in every year that is 
evenly divisible by 4, unless the year is also divisible by 100. 

If the year is evenly divisible by 100, then it is not a leap year, 
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. 
Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

*/

// Write a function that takes any year greater than 0 as input

let isLeapYear = function (year) {
    // year is divisible by 400
    if (year % 400 === 0) { // if year is divisible by 400 it's always a leap year, since it's also divisible by 100 in that case
        // returns true if the year is a leap year 
        return true;
    }
    else if (year % 4 === 0 && year % 100 !== 0) { 
        return true;
    }
     // return false if it is not a leap year
    return false;

   
}



console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true