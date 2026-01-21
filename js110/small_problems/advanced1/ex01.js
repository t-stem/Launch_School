/*
Let's build another program using madlibs. We made a similar program in the Easy exercises, 
but this time the requirements are a bit different.

Build a madlibs program that takes a text "template" as input, plugs in a selection of randomized nouns, verbs, adjectives, 
and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly 
into your program. Your program should read this text and, for each line, place random words of the appropriate types into the
 text and return the result.

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text templates. 
Choose the right way to structure your templates and this problem becomes much easier. Consequently, this exercise is a bit more open-ended
 since the input is also something that you'll define for yourself.

*/

const VERBS = ['eat', 'draw', 'paint', 'watch', 'cut', 'buy', 'study'];
const ADJECTIVES = ['beautiful', 'big', 'small', 'pretty'];
const NOUNS = ['apple', 'strawberry', 'watermelon', 'broccoli'];
const ADVERBS = ['patiently', 'intently', 'slowly', 'quickly'];
const lastChars = 'sxzoh';
const exceptions = 'y';
const consonants = 'bcdefghjklmnpqrstvwxz';

function randomIndex(stringsArray) {
  return Math.floor(Math.random() * stringsArray.length);
}

function conjugate (inputVerb) {
  let lastIndex = inputVerb.length - 1;
  let lastChar = inputVerb[lastIndex];
  let penultimateChar = inputVerb[lastIndex - 1];

  if (lastChars.includes(lastChar)) return inputVerb + 'es';

  if (exceptions.includes(lastChar) && consonants.includes(penultimateChar)) return inputVerb.slice(0, lastIndex) + 'ies';

  return inputVerb + 's';
}

function wordAnOrA (word) {
  if (!consonants.includes(word[0])) return 'n';

  return '';
}

function template1 (verb, adverb, noun, adjective) {
  console.log(`I ${adverb} ${verb} a${wordAnOrA(adjective)} ${adjective} ${noun}.`);
}


function template2 (verb, adverb, noun, adjective) {
  console.log(`The ${adjective} cat ${adverb} ${conjugate(verb)} a${wordAnOrA(adjective)} ${noun}.`);
}

function template3(verb, adverb, noun, adjective) {
  console.log(`We try to ${adverb} ${verb} the ${adjective} ${noun}.`);
}

const templates = [template1, template2, template3];

function madlibs2(templatesArray) {
  templatesArray.forEach(templateFunction => {
    let randomVerb = VERBS[randomIndex(VERBS)];
    let randomAdverb = ADVERBS[randomIndex(ADVERBS)];
    let randomNoun = NOUNS[randomIndex(NOUNS)];
    let randomAdjective = ADJECTIVES[randomIndex(ADJECTIVES)];
    
    templateFunction(randomVerb, randomAdverb, randomNoun, randomAdjective);
  });
}

let temp1 = 'I ADVERB VERB XAN ADJECTIVE NOUN.';
let temp2 = 'The ADJECTIVE cat ADVERB CONJVERB the NOUN.';
let temp3 = 'We try to ADVERB VERB the ADJECTIVE NOUN.';

let templateStrings = [temp1, temp2, temp3];

function madlibs (templateString) {
  let newString = templateString.replace('ADVERB', ADVERBS[randomIndex(ADVERBS)]);
  newString = newString.replace('CONJVERB', conjugate(VERBS[randomIndex(VERBS)]));
  newString = newString.replace('VERB', VERBS[randomIndex(VERBS)]);
  newString = newString.replace('NOUN', NOUNS[randomIndex(NOUNS)]);
  newString = newString.replace('ADJECTIVE', ADJECTIVES[randomIndex(ADJECTIVES)]);
  if (newString.includes('XAN')) {
    let wordsArray = newString.split(" ");
    let indexXAN = wordsArray.indexOf('XAN');
    let nextWord = wordsArray[indexXAN + 1];
    newString = newString.replace('XAN', 'a' + wordAnOrA(nextWord));
  }

  console.log(newString);
}

templateStrings.forEach(string => madlibs(string));
