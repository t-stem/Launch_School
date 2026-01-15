/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side,
 
Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 
'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/

function triangle(side1, side2, side3) {
  if (side1 === 0 || side2 === 0 || side3 === 0) return 'invalid';

  let sorted = [side1, side2, side3].sort((a, b) => a - b);
  if (sorted[0] + sorted[1] < sorted[2]) return 'invalid';
  
  if (side1 === side2 && side2 === side3) return 'equilateral';

  if (side1 === side2 || side1 === side3 || side2 === side3) return 'isosceles';

  return 'scalence';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"



