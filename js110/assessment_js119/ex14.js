/*
Create a function that takes a single integer argument and 
returns the sum of all the multiples of 7 or 11 that are less than the argument. 

If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of these multiples is 75.

If the argument is negative, return 0.

PROBLEM:
- Input:  single integer
- Output: the sum of all the multiples of 7 or 11 that are less than the argument

Explicit rules:
- If a number is a multiple of both 7 and 11, count it just once.
If the argument is negative, return 0.


DATA STRUCTURES:
- [multiples of 7 and 11]


ALGORITHM:
- IF integer < 0
  RETURN 0

- Find multiples of 7 that are < integer
  Push each one to multiples

- Find multiples of 11 that are < integer
  IF multiples doesn't contain current multiple
    Push currentMultiple to multiples

- Take the sum of multiples
*/

function sevenEleven(inputInt) {
  if (inputInt < 0) return 0;

  let multiples = [];

  for (let mult7 = 7; mult7 < inputInt; mult7 += 7) {
    multiples.push(mult7);
  }

  
  for (let mult11 = 11; mult11 < inputInt; mult11 += 11) {
    if (!multiples.includes(mult11)) {
      multiples.push(mult11);
    }
  }

  return multiples.reduce((sum, int) => sum + int, 0);
}

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75); 7 + 14 + 21 + 11 + 22
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);