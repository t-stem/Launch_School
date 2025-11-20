/* Take a moment to read the MDN documentation on the continue statement.
Then write a for loop that loops over the elements of the array cities 
and logs the length of each string to the console. If the element is null, 
skip forward to the next iteration without logging anything to the console. */

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i +=1) { // declare i using let (otherwise it's a global variable which can cause issues)
    if (cities[i] === null) {
        continue;
    }
    console.log(cities[i].length);
}