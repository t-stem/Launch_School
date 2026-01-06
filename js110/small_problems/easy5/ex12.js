/*
As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. 

If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, 
and return the number of minutes before and after midnight, respectively. 

Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.
*/

const HOURS_PER_DAY = 24;
const MINS_PER_HOUR = 60;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;
const TOP_MIN = 60;

function extractHours(time) {
  return Number(time.slice(0, 2));
}

function extractMins(time) {
  return Number(time.slice(3, 5));
}

function afterMidnight(time) {
  let mins = extractMins(time);
  let hours = extractHours(time);

  let minsAfterMidnight = hours * MINS_PER_HOUR + mins;

  return minsAfterMidnight % MINS_PER_DAY;
}

function beforeMidnight(time) { // added simplified version by building on afterMidnight() function 
  let minsBeforeMidnight = MINS_PER_DAY - afterMidnight(time);

  return minsBeforeMidnight % MINS_PER_DAY;
}


function beforeMidnight2(time) {
  let mins = extractMins(time);
  let hours = extractHours(time);

  let minsBeforeMidnight = TOP_MIN - mins + (HOURS_PER_DAY - hours - 1) * MINS_PER_HOUR;

  return minsBeforeMidnight % MINS_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);