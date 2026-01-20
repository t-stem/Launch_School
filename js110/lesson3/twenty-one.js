const readlineSync = require('readline-sync');
const GAME_MODES = Object.freeze({singles: 'singles', five: 'five'});
const GAME_MODE_INPUTS = Object.freeze([GAME_MODES['singles'], GAME_MODES['singles'][0], GAME_MODES['five'], GAME_MODES['five'][0], '5']);
const GOAL_SUM = 21;
const DEALER_MIN = 17;
const VALUES = Object.freeze({2: 2, 3 :3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
  10: 10, Jack: 10, Queen: 10, King: 10, Ace: null});
const SUIT = Object.freeze(Object.keys(VALUES));
const FULL_DECK = Object.freeze(SUIT.concat(SUIT).concat(SUIT).concat(SUIT));
const ACE_MIN = 1;
const ACE_MAX = 11;
const CONTESTANTS = Object.freeze({player: 'player', dealer: 'dealer'});
const OUTCOMES = Object.freeze({playerBust: 'playerBust', dealerBust: 'dealerBust', win: 'win', lose: 'lose', tie: 'tie'});

const ROUND_RETURNS = {};
ROUND_RETURNS[OUTCOMES['playerBust']] = OUTCOMES['lose'];
ROUND_RETURNS[OUTCOMES['dealerBust']] = OUTCOMES['win'];
ROUND_RETURNS[OUTCOMES['win']] = OUTCOMES['win'];
ROUND_RETURNS[OUTCOMES['lose']] = OUTCOMES['lose'];
ROUND_RETURNS[OUTCOMES['tie']] = OUTCOMES['tie'];
Object.freeze(ROUND_RETURNS);

const BEST_OF_FIVE_OUTCOMES = {};
BEST_OF_FIVE_OUTCOMES[OUTCOMES['win']] = OUTCOMES['win'];
BEST_OF_FIVE_OUTCOMES[OUTCOMES['lose']] = OUTCOMES['lose'];

const COLORS = {};
COLORS[CONTESTANTS['player']] = '\x1b[34m';
COLORS[CONTESTANTS['dealer']] = '\x1b[33m';
COLORS[OUTCOMES['win']] = '\x1b[32m';
COLORS[OUTCOMES['lose']] = '\x1b[31m';
COLORS[OUTCOMES['dealerBust']] = '\x1b[32m';
COLORS[OUTCOMES['playerBust']] = '\x1b[31m';
COLORS['invalidInput'] = '\x1b[31m';
COLORS['bold'] = '\x1b[1m';
COLORS['ending'] = '\x1b[0m';
Object.freeze(COLORS);

const HIT_OR_STAY = ['stay', 's', 'hit', 'h'];
const VALID_AFFIRMATIVES = ['yes', 'y'];
const VALID_NEGATIVES = ['no', 'n'];
const LINE = '-----------------------------------------------------------------------------------------------------';
const cardsNamesAn = Object.freeze(['8', 'Ace']);

function prompt(promptString, color = '') {
  let colorEnding = color ? COLORS['ending'] : '';
  let colorBeginning = color;

  console.log(`>>> ${colorBeginning}${promptString}${colorEnding}`);
}

function quote(quoteString) {
  return `'${quoteString}'`;
}

function sanitizeJoiner(joiner, padStart = 0, padEnd = 1) {
  joiner = joiner.trim();
  let length = joiner.length;
  joiner = joiner.padStart(length + padStart);
  joiner = joiner.padEnd(length + padStart + padEnd);
  return joiner;
}

function advancedJoin(stringsArray, mainDelimiter = ',', finalDelimiter = 'or') {
  let finalIndex = stringsArray.length - 1;

  if (finalIndex === 0) return stringsArray[finalIndex];

  mainDelimiter = sanitizeJoiner(mainDelimiter, 0, 1);
  finalDelimiter = sanitizeJoiner(finalDelimiter, 1, 1);

  return stringsArray
    .slice(0, finalIndex)
    .join(mainDelimiter) + finalDelimiter + stringsArray[finalIndex];
}

function randomCardIndex(finalIndex) {
  return Math.floor(Math.random() * (finalIndex + 1));
}

function shuffleDeck(deckToShuffle) {
  prompt('Shuffling deck...');

  let totalCards = deckToShuffle.length;

  for (let finalIndex = totalCards - 1; finalIndex >= 0; finalIndex -= 1) {
    let randomIndex = randomCardIndex(finalIndex);
    let randomCard = deckToShuffle.splice(randomIndex, 1)[0];
    deckToShuffle.push(randomCard);
  }
}

function initializeDeck() {
  let outputDeck = [];

  FULL_DECK.forEach(card => outputDeck.push(card));

  shuffleDeck(outputDeck);

  return outputDeck;
}

function drawFromDeck(drawHand, drawDeck) {
  let finalCardIndex = drawDeck.length - 1;

  let drawnCardIndex = randomCardIndex(finalCardIndex);
  let drawnCardType = drawDeck.splice(drawnCardIndex, 1)[0];

  let card = {};
  card['type'] = drawnCardType;
  card['value'] = VALUES[drawnCardType];

  drawHand.push(card);

  sortHand(drawHand);
  drawHand['value'] = calcHandValue(drawHand);

  return card;
}

function sortHand(thisHand) {
  thisHand.sort((a, b) => {
    if (a['type'] === 'Ace') {
      if (b['type'] === 'Ace' && a['value'] < b['value']) return -1;
      return 1;
    }
    if (b['type'] === 'Ace') return -1;
    if (a['type'] === 'King') return 1;
    if (b['type'] === 'King') return -1;
    if (a['type'] === 'Queen') return 1;
    if (b['type'] === 'Queen') return -1;
    if (a['type'] === 'Jack') return 1;
    if (b['type'] === 'Jack') return -1;
    return a['value'] - b['value'];
  });
}

function calcHandValue(calcHand) {
  let sum = 0;
  let aces = [];
  let testSum = 0;

  calcHand.forEach(card => {
    if (card['type'] === 'Ace') {
      aces.push(card);
      card['value'] = ACE_MAX; // set value to ACE_MAX by default, then adjust as necessary
      testSum += card['value'];
    } else {
      sum += card['value'];
    }
  });

  testSum += sum;

  for (let ace of aces) {
    if (testSum > GOAL_SUM) {  // if the testSum > 21, adjust the value of an ace and recalculate the test sum. Adjust the next ace if testSum > 21 still.
      testSum -= ace['value'];
      ace['value'] = ACE_MIN;
      testSum += ace['value'];
    } else break;
  }

  aces.forEach(ace => {
    sum += ace['value'];
  });

  return sum;
}

function initializeHand(fromDeck, contestant) {
  let initializedHand = [];
  initializedHand['contestant'] = contestant;

  prompt(`Drawing two cards for ${contestant === CONTESTANTS['player'] ? `${COLORS[CONTESTANTS['player']]}you${COLORS['ending']}` : `${COLORS[CONTESTANTS['dealer']]}the dealer${COLORS['ending']}`}...`);

  for (let drawnCards = 0; drawnCards < 2; drawnCards += 1) {
    drawFromDeck(initializedHand, fromDeck);
  }

  return initializedHand;
}

function getValidInput(validInputsArray) {
  let validInputs = validInputsArray.map(input => quote(input));
  let response;
  let inputIsValid = false;

  do {
    response = readlineSync
      .question(`Please enter ${advancedJoin(validInputs, ",", "or")}: `)
      .trim()
      .toLowerCase();
    inputIsValid = validInputsArray.includes(response);
    if (!inputIsValid) {
      console.log(LINE);
      prompt(`Your input is not valid. Valid inputs include: ${advancedJoin(validInputs, ",", "or")}.`, COLORS['invalidInput']);
    }
  }
  while (!inputIsValid);

  return response;
}

function acesInHand (inHand) {
  let counter = 0;

  for (let card of inHand) {
    if (card['type'] === 'Ace') {
      counter += 1;
    }
  }

  return counter;
}

function showHand(handToShow) {
  let handValue = handToShow['value'];
  let contestant = handToShow['contestant'];
  let contestantString = contestant === CONTESTANTS['player'] ? 'Your' : "The dealer's";

  prompt(`${contestantString} hand contains the following cards: ${advancedJoin(handToShow.map(card => card['type']), ',', 'and')}.`, COLORS[contestant]);

  let aces = acesInHand(handToShow);

  if (aces) {
    prompt(`${contestantString} ${aces > 1 ? 'aces are' : 'ace is'} worth: ${advancedJoin(handToShow
      .filter(card => card['type'] === 'Ace')
      .map(ace => ace['value']),
    ',', 'and')}${aces > 1 ? ' respectively' : ''}.`, COLORS[contestant]);
  }

  prompt(`The value of ${contestantString.toLowerCase()} hand is ${handValue}.`, COLORS[contestant]);
  console.log(LINE);
}

function showDealerCard(cardInHand, cardIndex) {
  let revealCard = cardInHand[cardIndex];

  prompt(`The dealer has a${cardsNamesAn.includes(revealCard['type']) ? 'n' : ''} ${revealCard['type']} and an unknown card.`, COLORS[CONTESTANTS['dealer']]);
  console.log(LINE);
}

function contestantBusted(contestantHand) {
  return contestantHand['value'] > GOAL_SUM;
}

function askPlayerStay() {
  prompt(`Would you like to hit or stay?`);
  let userResponse = getValidInput(HIT_OR_STAY);
  return HIT_OR_STAY.slice(0, 2).includes(userResponse.toLowerCase());
}

function playerTurn (handOfPlayer, deckForTurn, handOfDealer) {
  let playerStay = false;
  const contestant = CONTESTANTS['player'];
  const dealerCardIndex = randomCardIndex(handOfDealer.length - 1);

  do {
    showHand(handOfPlayer);
    showDealerCard(handOfDealer, dealerCardIndex);

    playerStay = askPlayerStay();
    if (!playerStay) {
      let drawnCard = drawFromDeck(handOfPlayer, deckForTurn);

      console.clear();
      prompt(`You chose to hit. You have drawn a${cardsNamesAn.includes(drawnCard['type']) ? 'n' : ''} ${drawnCard['type']}.`, COLORS[contestant]);

      if (contestantBusted(handOfPlayer)) return;

      console.log(LINE);
    }
  }
  while (!playerStay);

  console.clear();
  prompt(`You chose to stay at ${handOfPlayer['value']}.`, COLORS[contestant]);
  console.log(LINE);
}

function askToProceed() {
  console.log(LINE);
  readlineSync.question(`Please hit 'enter' to proceed...`);
  console.clear();
}

function dealerTurn(dealersHand, deckForTurn) {
  const contestant = CONTESTANTS['dealer'];
  showHand(dealersHand);

  while (dealersHand['value'] < DEALER_MIN) {
    prompt(`The dealer chose to hit...`, COLORS[contestant]);

    let drawnCard = drawFromDeck(dealersHand, deckForTurn);
    
    prompt(`The dealer drew a${cardsNamesAn.includes(drawnCard['type']) ? 'n' : ''} ${drawnCard['type']}.`, COLORS[CONTESTANTS['dealer']]);

    if (contestantBusted(dealersHand)) return;

    askToProceed();
  }

  prompt(`The dealer chose to stay at ${dealersHand['value']}.`, COLORS[contestant]);
}

function determineOutcome(currHandPlayer, currHandDealer) {
  if (contestantBusted(currHandPlayer)) return OUTCOMES['playerBust'];

  if (currHandDealer === undefined) return '';

  if (contestantBusted(currHandDealer)) return OUTCOMES['dealerBust'];

  if (currHandPlayer['value'] > currHandDealer['value']) return OUTCOMES['win'];

  if (currHandPlayer['value'] < currHandDealer['value']) return OUTCOMES['lose'];

  if (currHandPlayer['value'] === currHandDealer['value']) return OUTCOMES['tie'];

  return '';
}

function startDisplayOutcome() {
  console.log(LINE);
  readlineSync.question(`This round is over. Please hit 'enter' to display the outcome...`);
  console.clear();
}

function displayOutcome(outcomeToDisplay, displPlayerHand, displDealerHand) {
  startDisplayOutcome();
  showHand(displPlayerHand);
  showHand(displDealerHand);

  switch (outcomeToDisplay) {
    case OUTCOMES['playerBust']:
      prompt(`You busted, the dealer wins this round!`, COLORS[outcomeToDisplay]);
      break;
    case OUTCOMES['dealerBust']:
      prompt(`The dealer busted, you win this round!`, COLORS[outcomeToDisplay]);
      break;
    case OUTCOMES['win']:
      prompt(`Congratulations, you have won this round!`, COLORS[outcomeToDisplay]);
      break;
    case OUTCOMES['lose']:
      prompt(`The dealer has won this round.`, COLORS[outcomeToDisplay]);
      break;
    case OUTCOMES['tie']:
      prompt(`It's a tie.`);
      break;
    default:
      prompt('Outcome cannot be determined.');
  }
}

function playRound() {
  prompt(`Starting a new round!\n${LINE}`);
  let roundDeck = initializeDeck();
  let playerHand = initializeHand(roundDeck, CONTESTANTS['player']);
  let dealerHand = initializeHand(roundDeck, CONTESTANTS['dealer']);

  askToProceed();

  playerTurn(playerHand, roundDeck, dealerHand);

  let roundOutcome = determineOutcome(playerHand);

  if (roundOutcome === OUTCOMES['playerBust']) {
    displayOutcome(roundOutcome, playerHand, dealerHand);
    return ROUND_RETURNS[roundOutcome];
  }

  dealerTurn(dealerHand, roundDeck);

  roundOutcome = determineOutcome(playerHand, dealerHand);
  displayOutcome(roundOutcome, playerHand, dealerHand);

  if (Object.keys(ROUND_RETURNS).includes(roundOutcome)) {
    return ROUND_RETURNS[roundOutcome];
  }

  return '';
}

function playSingles() {
  let nextRound;
  let yesNoInputs = VALID_AFFIRMATIVES.concat(VALID_NEGATIVES);

  do {
    console.clear();
    playRound();
    console.log(LINE);
    prompt('Would you like to play another round?');
    nextRound = getValidInput(yesNoInputs);
  }
  while (VALID_AFFIRMATIVES.includes(nextRound));

  console.clear();
}

function isBestOfFive(playerScore, dealerScore) {
  const WINNING_SCORE = Math.ceil(5 / 2);

  if (playerScore === WINNING_SCORE) return OUTCOMES['win'];

  if (dealerScore === WINNING_SCORE) return OUTCOMES['lose'];

  return '';
}

function initializeScoreboard() {
  let scoreboard = {};

  scoreboard[CONTESTANTS['player']] = 0;
  scoreboard[CONTESTANTS['dealer']] = 0;

  return scoreboard;
}

function displayBestOfFive(bestOfFive) {
  switch (bestOfFive) {
    case BEST_OF_FIVE_OUTCOMES['win']:
      prompt(`Congratulations, you've won this match of best-of-five!`, COLORS[BEST_OF_FIVE_OUTCOMES['win']], COLORS['bold']);
      break;
    case BEST_OF_FIVE_OUTCOMES['lose']:
      prompt(`The dealer has won this match of best-of-five.`, COLORS[BEST_OF_FIVE_OUTCOMES['lose']], COLORS['bold']);
      break;
    case '':
      prompt('The winner cannot be determined.', COLORS['bold']);
  }
}

function pointsNotation(score) {
  return score !== 1 ? 'points' : 'point';
}

function displayScores(scoreboard) {
  let dispPlayerScore = scoreboard[CONTESTANTS['player']];
  let dispDealerScore = scoreboard[CONTESTANTS['dealer']];

  prompt(`You have ${dispPlayerScore} ${pointsNotation(dispPlayerScore)} and the dealer has ${dispDealerScore} ${pointsNotation(dispDealerScore)}.`);
}

function updateScores(roundResult, scores) {
  switch (roundResult) {
    case ROUND_RETURNS['win']:
      scores[CONTESTANTS['player']] += 1;
      break;
    case ROUND_RETURNS['lose']:
      scores[CONTESTANTS['dealer']] += 1;
      break;
    case ROUND_RETURNS['tie']:
      break;
    default:
      prompt('Error: scores cannot be updated.', COLORS['invalidInput']);
  }
}

function isClearOutcome(outcomeToCheck) {
  if (Object.values(ROUND_RETURNS).includes(outcomeToCheck)) return true;

  prompt("Error: Outcome is unclear.", COLORS['invalidInput']);
  return false;
}

function startBestOfFive() {
  console.clear();
  prompt('Welcome to best-of-five!', COLORS['bold']);
  prompt(`You'll get a point for every round that you win.`);
}

function startNextRound(bestOfFiveReached) {
  console.log(LINE);
  readlineSync.question((!bestOfFiveReached) ? `Please hit 'enter' to start the next round...` : `The match is over. Please hit 'enter' to reveal the winner...`);
  console.clear();
}

function playBestOfFive() {
  startBestOfFive();

  let contPlayer = CONTESTANTS['player'];
  let contDealer = CONTESTANTS['dealer'];
  let scoreboard = initializeScoreboard();
  let bestOfFive = '';

  do {
    displayScores(scoreboard);
    let outcomeOfRound = playRound();

    if (!isClearOutcome(outcomeOfRound)) break;

    updateScores(outcomeOfRound, scoreboard);
    bestOfFive = isBestOfFive(scoreboard[contPlayer], scoreboard[contDealer]);

    displayScores(scoreboard);

    startNextRound(bestOfFive);
  }
  while (!bestOfFive);

  displayScores(scoreboard);
  displayBestOfFive(bestOfFive);
}

function closeGame() {
  console.log(LINE);
  prompt(`Thank you for playing ${GOAL_SUM}, goodbye!`, COLORS['bold']);
  console.log(LINE);
}

function playGame() {
  console.clear();

  prompt(`Welcome to this game of ${GOAL_SUM}!\n${LINE}`, COLORS['bold']);
  prompt('Would you like to play single games or best-of-five?');

  let chosenMode = getValidInput(GAME_MODE_INPUTS);
  let singlesInputs = GAME_MODE_INPUTS.slice(0, 2);
  let bestOfFiveInputs = GAME_MODE_INPUTS.slice(2);

  if (singlesInputs.includes(chosenMode)) {
    playSingles();

  } else if (bestOfFiveInputs.includes(chosenMode)) {
    playBestOfFive();

  } else {
    prompt('Game mode not recognized.', COLORS['invalidInput']);
  }

  closeGame();
}

playGame();