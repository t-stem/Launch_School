const readlineSync = require("readline-sync");
const SQUARE_MARKERS = Object.freeze({
  player: 'X',
  computer: '@'
});
const OUTCOMES = Object.freeze({
  player: SQUARE_MARKERS['player'],
  computer: SQUARE_MARKERS['computer'],
  tie: 'Tie'
});
const WIN_MATCH_SCORE = 5;
const SQUARES_STATE_DEFAULT = Object.freeze({ // squares marked with a number string are unclaimed by either the player or the computer
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
});
const WINNING_SCENARIOS = Object.freeze([ // combinations of squares marked by a single contestant that constitute a win
  Object.freeze(['1', '2', '3']),
  Object.freeze(['4', '5', '6']),
  Object.freeze(['7', '8', '9']),
  Object.freeze(['1', '4', '7']),
  Object.freeze(['2', '5', '8']),
  Object.freeze(['3', '6', '9']),
  Object.freeze(['1', '5', '9']),
  Object.freeze(['3', '5', '7'])
]);
const empty5 = '     ';
const empty2 = '  ';
const vert = '|';
const hor5 = '-----';
const connector = '+';
const emptyRow = [empty5, vert, empty5, vert, empty5].join('');
const dividerRow = [hor5, connector, hor5, connector, hor5].join('');
const VALID_AFFIRMATIVES = Object.freeze(['yes', 'y']);
const VALID_NEGATIVES = Object.freeze(['no', 'n']);
const GAME_MODES = Object.freeze({singles: 'singles', match: 'match'});

function prompt(text) {
  console.log(`>>> ${text}`);
}

function quote(inputString) {
  return `'${inputString}'`;
}

function joinOr(inputArray, mainDelimiter = ',', finalDelimiter = 'or') {
  let length = inputArray.length;
  if (length === 0) return '';
  if (length === 1) return String(inputArray[0]);

  mainDelimiter = mainDelimiter.trim();
  mainDelimiter = mainDelimiter.padEnd(mainDelimiter.length + 1);
  finalDelimiter = finalDelimiter.trim();
  finalDelimiter = finalDelimiter.padStart(finalDelimiter.length + 1);
  finalDelimiter = finalDelimiter.padEnd(finalDelimiter.length + 1);

  let lastCharIndex = length - 1;
  return inputArray.slice(0, lastCharIndex).join(mainDelimiter) +
  finalDelimiter + inputArray.slice(lastCharIndex);
}

function initializeGame() {
  let initializedSquares = {};

  for (let square in SQUARES_STATE_DEFAULT) {
    initializedSquares[square] = SQUARES_STATE_DEFAULT[square];
  }

  return initializedSquares;
}

function displayBoard(currentSquaresState) {
  let row2 = [empty2, currentSquaresState['1'], empty2, vert, empty2, currentSquaresState['2'], empty2, vert, empty2, currentSquaresState['3'], empty2].join('');
  let row6 = [empty2, currentSquaresState['4'], empty2, vert, empty2, currentSquaresState['5'], empty2, vert, empty2, currentSquaresState['6'], empty2].join('');
  let row10 = [empty2, currentSquaresState['7'], empty2, vert, empty2, currentSquaresState['8'], empty2, vert, empty2, currentSquaresState['9'], empty2].join('');

  console.log(`\n${emptyRow}\n${row2}\n${emptyRow}\n${dividerRow}\n${emptyRow}\n${row6}\n${emptyRow}\n${dividerRow}\n${emptyRow}\n${row10}\n${emptyRow}\n`);
}

function availableSquares(currentSquaresState) {
  let available = [];

  for (let square in currentSquaresState) {
    if (!Object.values(SQUARE_MARKERS).includes(currentSquaresState[square])) {
      available.push(square);
    }
  }

  return available;
}

function isAvailableSquare(inputSquare, currentSquaresState) {
  let available = availableSquares(currentSquaresState);
  return available.includes(inputSquare);
}

function isValidInput(input) {
  return Object.keys(SQUARES_STATE_DEFAULT).includes(input);
}

function invalidInput() {
  prompt(`Your input is not valid. Valid inputs include the following values: ${joinOr(Object.keys(SQUARES_STATE_DEFAULT))}.`);
}

function unavailableChoice() {
  prompt('The square you picked has already been taken.');
}

function playerChooses(currentSquaresState) {
  let chosenSquare;

  do {
    prompt(`It's your turn. Please choose from available squares ${joinOr(availableSquares(currentSquaresState))}.`);
    chosenSquare = readlineSync.question('Enter your choice here: ');
    if (!isValidInput(chosenSquare)) {
      invalidInput();
    } else if (!isAvailableSquare(chosenSquare, currentSquaresState)) {
      unavailableChoice();
    }
  }
  while (!isAvailableSquare(chosenSquare, currentSquaresState) ||
  !isValidInput(chosenSquare));

  return chosenSquare;
}

function countPlayerSquares(squaresArray) {
  let counter = 0
  squaresArray.forEach(square => {
    if (square === SQUARE_MARKERS['player']) {
      counter += 1;
    }
  });
  return counter;
}

function selectBlockingMove(adjacentSquares) {
  console.log('Opponent is selecting a blocking move.')
  for (let square of adjacentSquares) {
    if (square !== SQUARE_MARKERS['player']) return square;
  }
  return '';
}

function isImmediateThreatToComputer(currentSquaresState) {
  for (let scenario of WINNING_SCENARIOS) {
    let requiredSquare1 = scenario[0];
    let requiredSquare2 = scenario[1];
    let requiredSquare3 = scenario[2];
    
    let requiredSquares = [
      currentSquaresState[requiredSquare1],
      currentSquaresState[requiredSquare2],
      currentSquaresState[requiredSquare3]
    ];
    if (requiredSquares.includes(SQUARE_MARKERS['computer'])) continue; // if the computer has already claimed one of the squares in the winning scenario under evaluation, the player can never win using this scenario and the scenario is not a threat to the computer.
    if (countPlayerSquares(requiredSquares) === 2) return selectBlockingMove(requiredSquares, currentSquaresState);
  }

  return '';
}

function computerChooses(currentSquaresState) {
  let immediateThreat = isImmediateThreatToComputer(currentSquaresState);

  if (immediateThreat) {
    return immediateThreat;
  }

  let optionsArray = availableSquares(currentSquaresState);
  let optionIndex = Math.floor(Math.random() * optionsArray.length);

  return optionsArray[optionIndex];
}

function markSquare(choiceFunction, currentSquaresState) {
  let squareChoice = choiceFunction(currentSquaresState);

  if (choiceFunction === playerChooses) {
    prompt(`You have chosen: ${squareChoice}.`);
    currentSquaresState[squareChoice] = SQUARE_MARKERS['player'];
  } else if (choiceFunction === computerChooses) {
    prompt(`Your opponent has chosen: ${squareChoice}.`);
    currentSquaresState[squareChoice] = SQUARE_MARKERS['computer'];
  }
}

function executeTurn(currentSquaresState) {
  let completedPlayerTurns = Object.values(currentSquaresState)
    .filter(square => square === SQUARE_MARKERS['player'])
    .length;

  let completedComputerTurns = Object.values(currentSquaresState)
    .filter(square => square === SQUARE_MARKERS['computer'])
    .length;

  if (completedPlayerTurns > completedComputerTurns) { // player always gets to go first
    markSquare(computerChooses, currentSquaresState);
  } else {
    displayBoard(currentSquaresState);
    markSquare(playerChooses, currentSquaresState);
  }
}

function isBoardFull(currentSquaresState) {
  return availableSquares(currentSquaresState).length === 0;
}

function determineOutcome(currentSquaresState) {
  for (let scenario of WINNING_SCENARIOS) {
    let requiredSquare1 = scenario[0];
    let requiredSquare2 = scenario[1];
    let requiredSquare3 = scenario[2];

    if (currentSquaresState[requiredSquare1] === currentSquaresState[requiredSquare2] &&
      currentSquaresState[requiredSquare2] === currentSquaresState[requiredSquare3]) { // winning condtion: if all three squares specified in the scenario criteria are claimed by the same player
      return currentSquaresState[requiredSquare1]; // return the marking of the player who has claimed the winning squares
    }
  }

  if (isBoardFull(currentSquaresState)) {
    return OUTCOMES['tie'];
  }

  return '';
}

function displayOutcome(outcome) {
  switch (outcome) {
    case OUTCOMES['tie']:
      prompt("It's a tie!");
      break;
    case OUTCOMES['player']:
      prompt('Congratulations, you win!');
      break;
    case OUTCOMES['computer']:
      prompt('Your opponent has won.');
      break;
    default:
      prompt('Outcome unclear.');
  }
}

function runGame() {
  const gameState = initializeGame();
  let outcome;
  prompt(`Welcome to this game! You will be playing as ${SQUARE_MARKERS['player']} and your opponent will be playing as ${SQUARE_MARKERS['computer']}.`)

  do {
    executeTurn(gameState);
    outcome = determineOutcome(gameState);
  }
  while (!outcome);

  displayBoard(gameState);
  displayOutcome(outcome);

  return outcome;
}

function isValidMode(inputMode) {
  return Object.values(GAME_MODES).includes(inputMode.toLowerCase());
}

function matchOrSingle() {
  prompt('Would you like to play single games or a match?');
  prompt(`A match will end when a player has won ${WIN_MATCH_SCORE} games.`);
  let selectedMode;

  do {
    selectedMode = readlineSync.question(`Please enter ${joinOr(Object.values(GAME_MODES).map(mode => quote(mode)))} here: `);
    if (!isValidMode(selectedMode)) {
      prompt(`Your input is not valid. Valid inputs include ${joinOr(Object.values(GAME_MODES).map(mode => quote(mode)), ',', 'and')}.`);
    }
  }
  while (!isValidMode(selectedMode));

  return selectedMode;
}

function startNextGame() {
  prompt("Would you like to start a new game?");

  while (true) {
    let userInput = readlineSync
      .question(`Please enter ${quote(VALID_AFFIRMATIVES[0])} or ${quote(VALID_NEGATIVES[0])}: `)
      .toLowerCase();

    if (VALID_NEGATIVES.includes(userInput)) {
      return false;
    } else if (VALID_AFFIRMATIVES.includes(userInput)) {
      return true;
    } else {
      prompt(`Your input is not valid. Valid input includes ${joinOr(VALID_AFFIRMATIVES.concat(VALID_NEGATIVES).map(input => quote(input)), ',', 'and')}.`);
    }
  }
}

function displayScores(scores) {
  prompt(`Your score: ${scores['player']}.`);
  prompt(`Opponent's score: ${scores['computer']}.`);
}

function runMatch() {
  prompt('Starting a match...')
  let scores = {player: 0, computer: 0};
  let matchOutcome = '';
  
  while (scores['player'] < WIN_MATCH_SCORE && scores['computer'] < WIN_MATCH_SCORE) {
    displayScores(scores);
    prompt(`Starting a new game...`)
    
    let gameOutcome = runGame();
    if (gameOutcome === OUTCOMES['player']) {
      scores['player'] += 1;
    } else if (gameOutcome === OUTCOMES['computer']){
      scores['computer'] += 1;
    }
  }
  
  if (scores['player'] === WIN_MATCH_SCORE) {
    matchOutcome = OUTCOMES['player'];
  }
  else if (scores['computer'] === WIN_MATCH_SCORE) {
    matchOutcome = OUTCOMES['computer'];
  }
  
  displayScores(scores) 
  prompt('The match is over!');
  displayOutcome(matchOutcome);
  return matchOutcome;
}

function playTicTacToe() {
  prompt("Welcome to TicTacToe!");
  let chosenMode = matchOrSingle();

  if (chosenMode === GAME_MODES['match']) {
    runMatch();
  } else {
    let userResponse = startNextGame();

    while (userResponse) {
      runGame() 
      userResponse = startNextGame();
    }
  }
  prompt(`Thank you for playing! Goodbye!`);
}

playTicTacToe();