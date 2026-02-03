/*
Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct.

Formula for rectangle area is: width * length.
*/

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
    // this.area = this.width * this.length; FIX: this line should be removed. Area won't be recalculated automatically when length or width is updated 
  }

  getWidth() {return this.width;}
  getLength() {return this.length;}
  getArea() {return this.length * this.width} // area should be calculated rather than stored as a property. Otherwise it won't be updated when length or width is updated
}


let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

