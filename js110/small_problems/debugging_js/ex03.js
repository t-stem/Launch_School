/*
One bored and hungry evening we decided to randomly generate recipes. 
We can't wait to see the first suggestions, but JavaScript raises a TypeError, 
telling us that dishName.join is not a function. What is wrong?
*/

/* ANSWER
Both the dishName and dish variables are assigned to strings. 
They both take the return values of three function calls and concatenate them using the + operator, which evaluates to a string
The program then calls the .join() method on these variables, but the this method can only be called on arrays (not on strings)
The way to fix this would be to assign the two variables to arrays that contain the return values of their three respective function calls.
*/



// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

// FALSE let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// FALSE let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

let dishName = [random(adjective), random(firstNoun), random(secondNoun)]; // CORRECT
let dish = [random(ingredients, 3), random(spices, 2), random(extras, 1)]; // CORRECT

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));