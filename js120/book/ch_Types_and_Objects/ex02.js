/*
Write a simple constructor function that creates objects that represent books. 
Each book should have a title, author, and the year published. 
Create objects that represent the following books:

Title	Author	Year Published
Neuromancer	William Gibson	1984
Doomsday Book	Connie Willis	1992
When you are done, identify the type of the objects created, the constructor function, and the instance objects.
*/

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let book1 = new Book('Neuromancer',	'William Gibson',	1984);
let book2 = new Book('Doomsday Book',	'Connie Willis',	1992);

console.log(book1)
console.log(book2)



