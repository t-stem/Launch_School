/*
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 

If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and 
returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. 

You may also assume that the arguments are in degrees.

PROBLEM
- input: three angles of a triangle
- output: string triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

explicit rules:
- the sum of the angles must be exactly 180 degrees
- and every angle must be greater than 0
- You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
- You may also assume that the arguments are in degrees.

EXAMPLES

DATA STRUCTURES
- [angles sorted asc]
- 

ALGORITHM:

Sort angles
IF smallest angle <= 0
  RETURN 'invalid'

IF small + mid + large doesn't equal 180
  RETURN false

IF large = 90
  RETURN 'right

IF large > 90
  RETURN 'obtuse'

RETURN 'acute'

*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3].sort((a, b) => a - b);

  if (!angles.every(angle => angle > 0)) return 'invalid';

  if (angles.reduce((sum, angle) => sum + angle, 0) !== 180) return 'invalid';

  let large = angles[2];
  
  if (large > 90) return 'obtuse';

  if (large === 90) return 'right';

  return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"