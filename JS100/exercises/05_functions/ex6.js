/* Write a function that compares the length of two strings.
 It should return -1 if the first string is shorter, 
 1 if the second string is shorter, 
 and 0 if they're of equal length, as in the following example: 
 
compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

 */

function compareByLength(str1, str2) {
    let oneLength = str1.length;
    let twoLength = str2.length;
    if (oneLength === twoLength) {return 0}
    else if (oneLength < twoLength) {return -1}
    else {return 1}
}

console.log(compareByLength("No", "Yes"));