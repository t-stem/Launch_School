/*

Some people believe that Fridays that fall on the 13th day of the month are unlucky days. 

Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

*/

function fridayThe13ths(inputYear) {
  let thirteens = [];
  
  for (let month = 0; month < 12; month += 1) {
    thirteens.push(new Date(inputYear, month, 13));
  }

  let friday13s = thirteens.slice().filter(date => date.getDay() === 5); // 5 represents Fridays

  return friday13s.length;
}


// Test cases
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3