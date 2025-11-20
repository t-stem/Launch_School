/* Count the number of elements in scores that are 100 or above. */

let scores = [96, 47, 113, 89, 100, 102];

lengthScores = scores.filter(element => element >= 100).length;

console.log(lengthScores);