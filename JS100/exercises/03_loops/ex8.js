/* Write a while loop that logs all odd natural numbers between 1 and 40. */

let i = 1;
let sum = 0;

while (i <= 40) {
    if (i % 2 != 0) {sum = sum + i}
    i += 1;
}

console.log(sum)