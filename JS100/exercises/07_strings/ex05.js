/* Given strings like the following, how can you check whether they're
 equal irrespective of whether the characters they contain are upper or lower case? 
 */

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let stringComp = (str1, str2) => {console.log(`Comparison of "${str1}" and "${str2}" results in ${str1.toLowerCase() === str2.toLowerCase()}.`)}

stringComp(string1, string2);
stringComp(string1, string3);
stringComp(string2, string3);

