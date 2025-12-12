// Can you identify all of the variables, primitive values, and objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

/*
variables:
- CORRECTION: added boo
- scare (local in boo function)
- myBoo (local in boo function)
- halloweenCollection
- are keys variables? - ANSWER: NO
- CORRECTION: myBoo (global on line 14)

primitive values:
- "!!!"
- "Happy Halloween"
- "Boo"
- "May all your pumpkins be glowing"
- "greet"
are keys primitve values? ANSWER -> YES
- greet
- scare
- wish
- CORRECTION: HalloweenCollection["greet"] (passes a copy of the string)
- CORRECTION: scare.upperCase() returns a new string
- CORRECTION: concatenation of scare.uppercase() with "!!!" returns a new string
- CORRECTION: myBoo is passed into console.log by value, so another string is created


objects
- boo
- halloweenCollection ->
- CORRECTION: toUpperCase() method
- CORRECTION: log() method

