
/*

Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 

Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

PROBLEM:
- Input: year 
- Output: number of Friday the 13ths in that year

Explicit rules:
- You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. 
- You may also assume that the same calendar will remain in use for the foreseeable future.

EXAMPLES:

DATA STRUCTURES:
- [date of 13ths]

ALGORITHM
- Push all 13ths of the month during the given year into an array
- Loop through the array
- IF the day is a Friday
  Append to friday13 array
- RETURN length of friday13 array

*/

function fridayThe13ths(year) {
  let month13 = [];
  let friday13 = [];

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    month13.push(date);
  }
  
  month13.forEach(date => {
    if (date.getDay() === 5) {
      friday13.push(date);
    }
  })

  return friday13.length;
}

console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3