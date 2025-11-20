/* We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until it is empty. 
If you log the elements you remove, the expected behavior would look as follows. */

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

function checkOff(list) {
    while (list.length > 0) {
        console.log(list.shift()); // improvement: shortened code by using the property that shift() returns the removed element
    }
    return list; //addition: added return statement
}

checkOff(groceryList);

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []