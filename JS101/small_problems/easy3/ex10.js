/* 

Write a function that takes a year as input and returns the century. 
The return value should be a string that begins with the century number, 
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century. 
*/

function centuryEnding(century) {
    const lastTwoDigits = century % 100;
    if (lastTwoDigits > 10 && lastTwoDigits < 14) {
        return 'th'
    }
    
    const lastDigit = century % 10;
    switch (lastDigit) {
        case 1: 
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function century (year) {  
    let moduloCentury = year % 100;
    let quotientCentury = year / 100;
    if (moduloCentury === 0) {
        return year / 100 + centuryEnding(quotientCentury);
    } else {
        let truncCentury = Math.trunc(quotientCentury) + 1;
        return String(truncCentury) + centuryEnding(truncCentury);
    }

}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"