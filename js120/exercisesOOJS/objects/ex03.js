/*
In JavaScript, comparing two objects either with == or === checks for object identity. 
In other words, the comparison evaluates as true if it's the same object on either side of == or ===. 
This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. 
JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and 
returns true or false depending on whether the objects have the same key/value pairs.
*/

function objectsEqual2(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false; // FIX: IMPORTANT EDGE CASE -> without this line, obj2 might have more keys than obj1. The excess keys wouldn't be checked since the loops only iterate over obj1 keys

  for (let key1 in obj1) {
    if (!Object.keys(obj2).includes(key1)) return false;
    if (obj1[key1] !== obj2[key1]) return false;
  }

  return true;
}

function objectsEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
