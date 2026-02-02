
/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your function should work with any integer input.

You may not use javascript's Date class methods.

PROBLEM: 
- Input: a time using this minute-based format
- Output: the time of day in 24 hour format (hh:mm)

DATA STRUCTURES:
- 

ALGORITHM: 
Convert minsBefore into minsPast
- SET minsAdj = mins % 1440;
- IF minsAdj < 0;
  * mins = 1440 + mins

- Calculate time using minsPast
  hours = minsAdj % 60
  mins = minsAdj - hours * 60


- Convert time into correcct format
*/

function leadZero(strNum) {
  return strNum.length === 1 ? '0' + strNum : strNum;
}

function timeOfDay(minsAdj) {
  const MINS_PER_DAY = 1440;
  const MINS_PER_HR = 60;
  
  minsAdj = minsAdj % MINS_PER_DAY;
  
  let minsPast = minsAdj < 0 ? minsAdj + MINS_PER_DAY : minsAdj;

  let hours = String(Math.floor(minsPast / MINS_PER_HR));
  let mins = String(minsPast % MINS_PER_HR);

  return `${leadZero(hours)}:${leadZero(mins)}`;
}



console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(-60));    // expect "23:00"
console.log(timeOfDay(-1440));  // expect "00:00"
console.log(timeOfDay(1440));   // expect "00:00"