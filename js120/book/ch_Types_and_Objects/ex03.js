/*
Write a simple constructor function that creates objects that represent musical albums. Each album should have a title, artist, and release year. 

Create objects that represent the following 2 albums:

Title	Artist	Release Year
Thriller	Michael Jackson	1982
The Dark Side of the Moon	Pink Floyd	1973
When you are done, identify the type of the objects created, the constructor function, and the instance objects.

ANSWERS:
- Type: Album
- Constructor function: Album()
- instance objects: album1 and album2
*/

function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
}

let album1 = new Album('Thriller',	'Michael Jackson',	1982);
let album2 = new Album('The Dark Side of the Moon',	'Pink Floyd'	1973);

