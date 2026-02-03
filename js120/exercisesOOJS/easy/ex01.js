/*
Create a class Rectangle.

The constructor should take 2 arguments which represent width and length respectively.

Implement the class so that the output from the example below is correct.

Formula for rectangle area is: width * length.
*/

class Rectangle {
  constructor(w, l) {
    this.width = w;
    this.length = l;
    this.area = this.width * this.length;
  }

  getWidth() {return this.width;}
  getLength() {return this.length;}
  getArea() {return this.area;}
}


let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

