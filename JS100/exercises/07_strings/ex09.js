/* Write code that capitalizes the words in the string 'launch school tech & talk', 
so that you get the string 'Launch School Tech & Talk'. */

const strInput = 'launch school tech & talk';

function capInitials(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i += 1) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length);
    }
    return words.join(" ");
}

console.log(capInitials(strInput));