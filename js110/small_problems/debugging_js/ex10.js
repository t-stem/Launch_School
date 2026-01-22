/* 

We wrote a neutralize function that removes negative words from sentences. 
However, it fails to remove all of them. 
What does happen? How would you fix this problem?

ANSWER: 
- it's because .splice() mutates the words array while forEach is looping over that array
- when dull is removed, the length of the array is updated and boring moves to dull's old position
- when the next iteration starts, forEach will move to the next index position, which now contains cards
- as a result, the callback function is not called for 'boring', so it stays in the output string
- it can be fixed by avoiding the use of mutating methods on the words array
*/


function neutralize(sentence) {
  let words = sentence.split(" ");
  let newWords = []

  words.forEach(word => {
    if (!isNegative(word)) {
      newWords.push(word);
    }
  });
  return newWords.join(" ");
};

function isNegative(word) {
  console.log(word)
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
); 