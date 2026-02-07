/*
Write a simple constructor function that creates objects that represent books. 
Each book should have a title, author, and the year published. 
Create objects that represent the following books:

Title	Author	Year Published
Neuromancer	William Gibson	1984
Doomsday Book	Connie Willis	1992
When you are done, identify the type of the objects created, the constructor function, and the instance objects.
*/

let book = {
  title: 'title',
  author: 'author',
  year: 'year',
}

let book1 = Object.assign({}, book);
book1.title = 'Neuromancer';
book1.author = 'William Gibson';
book1.year = 1994;

let book2 = Object.assign({}, book);
book2.title = 'Doomsday Book';
book2.author = 'Connie Willis';
book2.year = 1992;


