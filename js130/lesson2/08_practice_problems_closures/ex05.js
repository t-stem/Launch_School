/*
Write a function named makeMultipleLister that you can call with a number as an argument. 
The function should return a new function that, when invoked,
logs every positive integer multiple of that number less than 100. 

It should work like this:


*/
function makeMultipleLister(num) {
  return function() {
    let currMultiple = num;
    let i = 1;
    while (true) {
      currMultiple = num * i;
      if (currMultiple >= 100) break;
      console.log(currMultiple);
      i += 1;
    }
  }
}


let lister = makeMultipleLister(17);
lister();


/* output
17
34
51
68
85
*/