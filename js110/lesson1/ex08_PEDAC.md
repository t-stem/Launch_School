# Assignment:
Given an array of strings, return a new array where the strings are sorted to the highest number of adjacent consonants a particular string contains. If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other. Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

# PROBLEM
## Task
You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

## Inputs
- an array of strings

## Outputs
- return a new array
  * the strings are sorted to the highest number of adjacent consonants a particular string contains

## Explicit rules
- If two strings contain the same highest number of adjacent consonants they should retain their original order in relation to each other
-  Consonants are considered adjacent if they are next to each other in the same word or if there is a space between two consonants in adjacent words
- Note that for this problem, the letters 'y' and 'w' should be treated as consonants.

## Implicit rules
- Strings can consist of multiple words

## Questions
- Are adjacent consonants case-sensitive ('T' === 't' e.g.)?
- 'sorted to the highest number', does this mean ascending sort order (low to high)?
  * test cases illustrate it means high to low
- Do all arrays contain at least one string with adjacent consonants?
  * test cases illustrate that some arrays contain no strings with adjacent consonants
- Are there any empty strings?
  * test cases illustrate there are no empty strings
- Can strings start or end with empty spaces?
  * test cases illustrate no
- Can strings contain non-alphabetic chars?
  * test cases illustrate no
- Can strings contain multiple sets of consecutive consonants?

# EXAMPLES/TEST CASES
## Task
With reference to your initial mental model and questions from Step 1, make some notes about the test cases. Do the test cases confirm or refute different elements of your original analysis and mental model? Do they answer any of the questions that you had? Do they raise any further questions?

## Do the test cases confirm or refute different elements of your original analysis and mental model?
- No

## Do they answer any of the questions that you had?
- yes, see * points in 'questions' section

## Do they raise any further questions?
- No

# DATA STRUCTURES
## Task
For this step, with reference to your analysis from the two preceding steps, make some notes regarding whether you might need to use any particular data structures as part of your solution. If so, which ones.

## Notes
- Arrays are the main data structure here (input and output)
  * output should be a new array, so avoid mutating original array
- Perhaps an intermediate step is required
  * arrays can easily be converted into strings and vice versa

# ALGORITHM
## Task
For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an abstract level. Avoid too much implementation detail at this stage.

## Steps
1) Create an const array with all consonants
2) Create a new array with sanitized strings (without spaces)
  1) Create a new array
  2) Loop through the original array
  3) Sanitize the strings (remove spaces)
  4) Push the sanitized strings to the new array
2) Create object with counts of adjacent consonants for every string
  1) Loop through the array of sanitized strings
  2) Loop through the chars in each string
    1) Compare each char to the 'consonants' array
    2) If char occurs in consonants, increase counter by 1
    3) When the loop ends, return the value of the counter
    4) Add a key value pair where the key is the string and the value is the return value
3) Create the new sorted array
  1) Create the new array
  2) Extract the keys from the object
  3) Loop through the keys
    1) Check the counter for each new key
    2) Loop through the string elements in the new array
      1) Look up the counter associated with the current string element in the object
      2) If the counter of the new key is bigger than the counter of the current string element
        * insert the new key before the string element
      3) If the counter of the new key is smaller than the counter of the current string element
        * move to the next element in the array
      4) If the counters are equal, check the order in the original array
        1) Find the index of the new key 
        2) Find the index of the current array element
        3) If index of new key is bigger than index of current array element
          * Insert new key before current array element
        4) Else
          * Insert current array element before new key













