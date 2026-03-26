/*

Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0, and the sum of the lengths of any two sides must be greater than the length of the third side.

*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (!this.isTriangle()) {
      throw new Error('Invalid triangle'); // ADDED: error message
    }
  }

  isTriangle() {
    if (this.sides.some(side => side <= 0)) return false;

    let [side1, side2, side3] = this.sides;

    if (side1 + side2 <= side3) return false;

    if (side1 + side3 <= side2) return false;

    if (side2 + side3 <= side1) return false;

    return true;
  }

  isEquilateral() {
    let [side1, side2, side3] = this.sides;

    return side1 === side2 && side2 === side3;
  }

  isIsosceles() {
    if (this.isEquilateral()) return false; // ADDED: below logic also returns true for equilateral triangles

    let [side1, side2, side3] = this.sides;

    return side1 === side2 || side1 === side3 || side2 === side3;
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';

    if (this.isIsosceles()) return 'isosceles';

    return 'scalene';
  }
}

module.exports = Triangle;