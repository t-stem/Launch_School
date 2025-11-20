/* Write a while loop that logs all odd natural numbers between 1 and 40. */

let i = 1;

while (i <= 40) { 
    if (i % 2 !== 0) {console.log(i)} // use <== instead of <= for strict inequality!
    i += 1;
}

// alternative solution

console.log("Alternative solution: ")

i = 1;

while (i < 40) {
    console.log(i);
    i += 2;
}