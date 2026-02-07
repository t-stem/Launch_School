/*
Write a function that takes a floating point number representing an angle between 0 and 360 degrees 
and returns a string representing that angle in degrees, minutes, and seconds. 

You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, 
and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


The current solution implementation only works with positive numbers in the range of 0 to 360 (inclusive).
 Can you refactor it so that it works with any positive or negative number?

PROBLEM
- Input: floating point number epresenting an angle between 0 and 360 degrees 
- Output:  a string representing that angle in degrees, minutes, and seconds. 

Explicit rules:
- You should use 
  * degree symbol (˚) to represent degrees, 
  * a single quote (') to represent minutes, 
  * and a double quote (") to represent seconds. 
- There are 60 minutes in a degree, and 60 seconds in a minute.

EXAMPLES

DATA STRUCTURES
- [deg, min, sec]

ALGORITHM
Remove any 'full circle' angles of 360 degrees
  * remainder = angle % 360

IF remainder < 0
  remainder = remainder + 360

SET deg = floor of remainder 
SET remainder = remainder - deg
SET min = floor of remainder * 60 
SET remainder = remainder - min
SET sec = floor of remainder * 60

convert all to strings
add zero if length of string < 2
concat using correct symbols

*/

function addZero(num) {
  num = String(num);
  return num.length < 2 ? '0' + num : num;
}

function dms(int) {
  const DEG_PER_CYCLE = 360
  const MIN_PER_DEG = 60;
  const SEC_PER_MIN = 60;

  let remainder = int % DEG_PER_CYCLE;

  if (remainder < 0) {
    remainder += DEG_PER_CYCLE;
  }

  let deg = Math.floor(remainder);
  remainder -= deg;
  let minUnround = remainder * MIN_PER_DEG;
  let min = Math.floor(minUnround);
  let sec = Math.floor((minUnround - min) * SEC_PER_MIN);

  console.log(`${addZero(deg)}°${addZero(min)}'${addZero(sec)}"`);
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00" -1 + 360
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00" -40 + 360
dms(-420); // 300°00'00" // -1 full cycle of 360, then -60 degrees left, + 360 degrees = 300
