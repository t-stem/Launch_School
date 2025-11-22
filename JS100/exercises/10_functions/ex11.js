/* Convert the person object into a nested array nestedPerson, containing the same key-value pairs.*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

newArray = Object.entries(person);
console.log(newArray);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]