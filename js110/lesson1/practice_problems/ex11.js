/*
Create an object that expresses the frequency with which each letter occurs in this string:
*/

let statement = "The Flintstones Rock";

let counts = {};

for (let char of statement) {
  if (counts.hasOwnProperty(char)) {
    counts[char] += 1;
  } else {
    counts[char] = 1;
  }
}

console.log(counts)

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

