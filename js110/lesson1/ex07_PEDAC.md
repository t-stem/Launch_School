# Assignment:
For each step, perform the task(s) outlined before reading through the discussion. 

Work through the task and discussion for a particular step before moving on to the next step. 

The idea here isn't to have your notes, algorithm, and solution exactly match the Launch School version. 

Your notes should reflect how you approached each step. 

For example, if there was something you missed in your initial exploration of the problem, think about why you might have missed it and use that analysis to improve your process.


# Problem
You have a number of building blocks that can be used to build a valid structure. There are certain rules about what determines the validity of a structure:

The building blocks are cubes
The structure is built in layers
The top layer is a single block
A block in an upper layer must be supported by four blocks in a lower layer
A block in a lower layer can support more than one block in an upper layer
You cannot leave gaps between blocks
Write a program that, given the number for a specific amount of cubes, calculates the number of blocks left over after building the tallest possible valid structure.

# Understand the PROBLEM
## Tasks
# Tasks
You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description provided

## Inputs
- Integer that represents the tumber of cubes available

## Outputs
- Integer that represents the number of cubes left over after building the tallest possible valid structure

## Explicit rules
- The building blocks are cubes (which have equal sides)
- The structure is built in layers
- The top layer is a single block
- A block in an upper layer must be supported by four blocks in a lower layer
- A block in a lower layer can support more than one block in an upper layer
- No gaps between blocks

## Implicit rules
- Layer can be valid or invalid
- Layer is invalid if it doesn't support all the blocks above
- Each block needs to touch four blocks in the layer below
  * Each block in an upper layer must touch at least four blocks in the layer below
  * A single block can be supported by four blocks at most (since the blocks are cubes with equal sides)
- Every layer is a square
- The sides of the square increase by one block as you go down one layer
- The sides of the square are equal to the layer number
  * Layer 1 has sides of 1 block, layer 2 has sides of 2 blocks, etc. 
- The number of blocks per layer will be a sequence of consecutive integers squared
  * 1^2=1, 2^2=4, 3^2=9, 4^2=16 etc. 
  * Total number of blocks is either 1, 1+4=5, 1+4+9=14, 1+4+9+16=30 etc.
- Number of available blocks >= 0 at all times


## Questions
- (from LS) Are there always blocks leftover?
- (from LS) Is a lower layer valid if it has more blocks than it needs?
  * We need to make the tallest possible structure, so a layer shouldn't have more blocks than it needs

# EXAMPLES/test cases
## Task
With reference to your initial mental model and questions from Step 1, make some notes about the test cases. 

## Do the test cases confirm or refute different elements of your original analysis and mental mode? 
- They confirm the elements in my mental model, e.g. total number of blocks required for a valid structure

## Do they answer any of the questions that you had, or do they perhaps raise further questions?
- Yes, they confirm that sometimes there are no blocks left over
- If we could use more blocks than needed, no blocks would be left over

# Data structures
## Task
For this step, use your analysis so far to make notes regarding whether you might need to use any particular data structures as part of your solution. If so, make notes on which ones.

## Notes
- It seems like no data structures are need and the problem can be solved using basic arithmetic 
- The physical structure could be represented using data structures
- This would require at least an array in which each element would represent a layer, and each element would contain either the number of blocks in that layer or the length of one of the sides (since the sides of one layer are equal)

# Algorithm
# Task
For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an abstract level. Avoid too much implementation detail at this stage.

## Steps
1) Take the total number of available blocks
2) Set the number of blocks in the top layer to 1 (as required)
3) Build a layer
  1) Compute the number of blocks required to build another layer
  2) Check if there are enough blocks available (number of blocks needed >= number of available blocks, where number of available blocks cannot be < 0)
    1)  If enough blocks are still available, deduct the number of blocks required from the the number of blocks available
    2) If there are not enough blocks available, return the number of blocks available (i.e. left over)
4) Compute the number of blocks required to build another layer
  * Take the length of one of the sides of the layer above
  * Increase the length by 1
  * Take the square of the result
3) Repeat step 3 until there are no blocks left over, or until step 3.2.1 
5) When the number of blocks left over reaches zero, return zero

# Code
## Constants
- Number of blocks in the top layer = 0 (fictional top layer to account for )

## variables
- Number of blocks available
  * scope within main function
  * passed in as an argument
  * decreases with every layer built
  * cannot go below zero

## helper functions
- Compute number of blocks required for the next valid layer
  * takes length of the in previous layer as an argument
  * default parameter = top layer constant
  * adds one
  * squares the result
  * returns the result

## loops
- for (requiredBlocks <= availableBlocks)
  * loop through layers, one iteration per layer
  * reduce number of blocks accordingly on every iteration





