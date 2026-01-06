/*
The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

revisit
*/

function toTwoDigits(integer) {
  return integer < 10 ? '0' + String(integer) : String(integer);
}

function timeOfDay(minsFromMidnight) { // revised, streamlined version
  const TOP_MIN = 60;
  const TOP_HOUR = 24;
  
  const MINS_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

  const normalizedMins = minsFromMidnight % MINS_PER_DAY; // normalized minsFromMidnight first, then calculated hours and mins

  let minsFromTop = normalizedMins % MINS_PER_HOUR; // mins from the top
  let mins = minsFromTop >= 0 ? minsFromTop : TOP_MIN + minsFromTop;

  let hoursFromTop = Math.floor(normalizedMins / MINS_PER_HOUR);
  let hours = hoursFromTop >= 0 ? hoursFromTop : TOP_HOUR + hoursFromTop;

  return `${toTwoDigits(hours)}:${toTwoDigits(mins)}`;
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


function timeOfDay2(minsFromMidnight) {
    const MINS_PER_HOUR = 60;
    const HOURS_PER_DAY = 24;
    const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;
    const TOP_HOUR = 24;
    const TOP_MIN = 60;

    const absMins = Math.abs(minsFromMidnight);

    let minsModulo = absMins % MINS_PER_HOUR;
    let mins = minsFromMidnight < 0 ? TOP_MIN - minsModulo : minsModulo;

    let daysModulo = absMins % MINS_PER_DAY; // mins left within the 24 hours from midnight
    let hoursFloored = Math.floor(daysModulo / MINS_PER_HOUR);
    let hours = minsFromMidnight < 0 ? TOP_HOUR - hoursFloored - 1 : hoursFloored

    return `${toTwoDigits(hours)}:${toTwoDigits(mins)}`;

}

