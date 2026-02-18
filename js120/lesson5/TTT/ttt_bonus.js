// SUPPORTING METHODS

const readlineSync = require('readline-sync');

const COUNT = {
  tallyFromArray(arr) {
    let tally = {};

    arr.forEach(element => {
      if (tally.hasOwnProperty(element)) {
        tally[element] += 1;
      } else {
        tally[element] = 1;
      }
    });

    return tally;
  },
};

const TEXT = Object.freeze({
  COLORS: {},

  colorString(str, color = '') {
    let colorEnding = color ? TEXT.COLORS['ending'] : '';
    let colorBeginning = color;

    return `${colorBeginning}${str}${colorEnding}`;
  },

  prompt(promptString, color = '') {
    let coloredString = TEXT.colorString(promptString, color);

    console.log(`>>> ${coloredString}`);
  },

  quote(quoteString) {
    return `'${quoteString}'`;
  },

  advancedJoin(stringsArray, mainDelimiter = ',', finalDelimiter = 'or') {
    function sanitizeJoiner(joiner, padStart = 0, padEnd = 1) {
      joiner = joiner.trim();
      let length = joiner.length;
      joiner = joiner.padStart(length + padStart);
      joiner = joiner.padEnd(length + padStart + padEnd);
      return joiner;
    }

    let finalIndex = stringsArray.length - 1;

    if (finalIndex === 0) return stringsArray[finalIndex];

    mainDelimiter = sanitizeJoiner(mainDelimiter, 0, 1);
    finalDelimiter = sanitizeJoiner(finalDelimiter, 1, 1);

    return stringsArray
      .slice(0, finalIndex)
      .join(mainDelimiter) + finalDelimiter + stringsArray[finalIndex];
  },

  presentOptions(optionsArr) {
    let quotedOps = optionsArr.map(option => TEXT.quote(option.toLowerCase()));
    return this.advancedJoin(quotedOps);
  },

  leadingSubstrings(inputString) {
    let substringsArr = [];
    
    for (let j = 1; j <= inputString.length; j += 1) {
      let substring = inputString.slice(0, j);
      substringsArr.push(substring);
    }

    return substringsArr;
  },
});

const USER_INPUT = Object.freeze({
  getResponse(optionsArr) {
    let validResponsesPerOption = this.initValidResponsesPerOption(optionsArr);
    let validResponses = Object.values(validResponsesPerOption).flat();

    while (true) {
      let userResponse = readlineSync
        .question(`Please enter ${TEXT.presentOptions(optionsArr)}: `)
        .trim()
        .toLowerCase();

      if (validResponses.includes(userResponse)) {
        return this.lookupChosenOption(userResponse, validResponsesPerOption);
      }

      TEXT.prompt(`Sorry, invalid response. Valid responses include: ${TEXT.presentOptions(validResponses.sort())}.`, TEXT.COLORS['invalid']);
    }
  },

  lookupChosenOption(chosenOption, validResponsesPerOption) {
    for (let option in validResponsesPerOption) {
      if (validResponsesPerOption[option].includes(chosenOption)) return option;
    }

    return '';
  },

  initValidSubstringsPerOption(stringsArr) {
    let substringsOfStrings = {};

    stringsArr.forEach(string => {
      substringsOfStrings[string] = TEXT.leadingSubstrings(string);
    });

    let substringsTally = COUNT
      .tallyFromArray(Object.values(substringsOfStrings).flat());

    for (let str in substringsOfStrings) {
      let substrings = substringsOfStrings[str];

      for (let currSubstring of substrings) {
        if (substringsTally[currSubstring] === 1) {
          substringsOfStrings[str] = [currSubstring];
          break;
        }
      }
    }

    return substringsOfStrings;
  },

  initValidResponsesPerOption(optionsArr) {
    let validResponsesPerOption = this.initValidSubstringsPerOption(optionsArr);

    for (let option in validResponsesPerOption) {
      validResponsesPerOption[option] = validResponsesPerOption[option]
        .map(response => response.toLowerCase());
      validResponsesPerOption[option].push(option.toLowerCase());
    }

    return validResponsesPerOption;
  },

  affirmativeResponse: 'Yes',

  negativeResponse: 'No',

  getYesNo() {
    return this.getResponse([this.affirmativeResponse, this.negativeResponse]);
  },

  respondedYes(response) {
    return response === this.affirmativeResponse;
  },

  askToProceed() {
    readlineSync.question(`Please hit 'enter' to proceed...`);
  }
});

// PROGRAM

const EMPTY_5X = ' '.repeat(5);
const DASH_5X = '-'.repeat(5);
const VERT_SEGMENT = '|';
const CONNECTOR = '+';
const EMPTY_ROW = (EMPTY_5X + VERT_SEGMENT).repeat(2);
const DIVIDER_ROW = (DASH_5X + CONNECTOR).repeat(2) + DASH_5X;
const EMPTY_2X = ' '.repeat(2);

function Player() {
  Player.CONTESTANTS.push(this);
  this.setMarker();
}

Player.CONTESTANTS = [];
Player.countContestants = function() {
  return Player.CONTESTANTS.length;
};

Player.MARKERS = ['X', '@'];
Player.AVAILABLE_MARKERS = {};
Player.populateAvailableMarkers = function() {
  this.MARKERS.forEach(marker => {
    this.AVAILABLE_MARKERS[marker] = true;
  });
};

Player.selectMarkersByAvailability = function(markerAvailability) {
  if (Object.keys(this.AVAILABLE_MARKERS).length === 0) {
    this.populateAvailableMarkers();
  }

  let selectedMarkers = [];

  for (let marker in this.AVAILABLE_MARKERS) {
    if (this.AVAILABLE_MARKERS[marker] === markerAvailability) {
      selectedMarkers.push(marker);
    }
  }

  return selectedMarkers;
};

Player.getClaimedMarkers = function() {
  return (this.selectMarkersByAvailability(false));
};

Player.getAvailableMarkers = function() {
  return this.selectMarkersByAvailability(true);
};

Player.claimMarker = function(marker) {
  this.AVAILABLE_MARKERS[marker] = false;
};

Player.prototype.setMarker = function() {
  let availableMarkers = Player.getAvailableMarkers();

  if (availableMarkers.length < 1) throw new Error('No marker available for this player.');
  // Idea: Make new marker (check if new marker is available, append to MARKERS if yes);
  // Idea: Catch error by asking user to create a new marker, append the new marker to markers and set it to available

  let marker = availableMarkers[0];
  Player.claimMarker(marker);
  this.marker = marker;
};

Player.prototype.updateScore = function() {
  this.score += 1;
}

Player.prototype.moveIsOffensive = function(moveObj) {
  return moveObj[Round.WINNER] === this.marker;
}

Player.prototype.findOffensiveMove = function(winningMovesArr) {
  for (let moveObj of winningMovesArr) {
    if (this.moveIsOffensive(moveObj)) {
      return moveObj[Round.WINNING_MOVE];
    }
  }

  return '';
}

Player.chooseRandomSquare = function(availableSquareNumsArr) {
  let chosenIndex = Math.floor(Math.random() * availableSquareNumsArr.length);
  return availableSquareNumsArr[chosenIndex];
}

Player.prototype.findDefensiveMove = function(winningMovesArr) {
  for (let moveObj of winningMovesArr) {
    if (!this.moveIsOffensive(moveObj)) {
      return moveObj[Round.WINNING_MOVE];
    }
  }

  return '';
}

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

Human.prototype.getRecommendation = function() {
  return this.getAvailableSquareNums();
}

Human.prototype.chooseSquare = function(availableSquares) {
  let availableSquaresString = `square${availableSquares.length > 1 ? 's' : ''} ${TEXT.advancedJoin(availableSquares)}`;

  TEXT.prompt(`It's your turn. You can choose from ${availableSquaresString}.`, TEXT.COLORS[this.marker]);
  let chosenSquare;

  while (true) {
    chosenSquare = readlineSync.question(TEXT.colorString(`Please enter the number of your chosen square and hit 'enter': `, TEXT.COLORS[this.marker]));

    if (availableSquares.includes(chosenSquare)) break;

    TEXT.prompt(`Sorry, that's not a valid choice. Please choose from ${availableSquaresString}.`, TEXT.COLORS['invalid']);
  }

  return chosenSquare;
};

Human.prototype.displayChosenSquare = function(chosenSquare) {
  TEXT.prompt(`You have chosen square ${chosenSquare}.`, TEXT.COLORS[this.marker]);
  USER_INPUT.askToProceed();
};

function Computer() {
  Player.call(this);
}

Computer.PREF_SQUARE = '5';

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.getRecommendation = function() {
  return [this.getAvailableSquareNums(), this.getWinningMoves()];
}

Computer.prototype.chooseSquare = function([availableSquareNumsArr, winningMovesArr]) {
  let move = this.findOffensiveMove(winningMovesArr);
  if (move) return move;

  move = this.findDefensiveMove(winningMovesArr);
  if (move) return move;

  if (availableSquareNumsArr.includes(Computer.PREF_SQUARE)) {
    return Computer.PREF_SQUARE;
  }
 
  return Player.chooseRandomSquare(availableSquareNumsArr);
};

Computer.prototype.displayChosenSquare = function(chosenSquare) {
  TEXT.prompt(`It's your opponent's turn.`, TEXT.COLORS[this.marker]);
  TEXT.prompt(`Your opponent has chosen square ${chosenSquare}.`, TEXT.COLORS[this.marker]);
  USER_INPUT.askToProceed();
};

function Square(marker = '') {
  this.state = String(marker);
}

Square.prototype.isUnmarked = function() {
  return !Player.getClaimedMarkers().includes(this.state);
};

Square.prototype.mark = function(marker) {
  this.state = String(marker);
};

Square.prototype.getState = function() {
  return this.state;
};

function Grid() {
  this.initialize();
}

Grid.SIDE = 3;

Grid.REQ_SQUARES_FOR_WINNING_MOVE = Grid.SIDE - 1;

Grid.SIZE = Grid.SIDE ** 2;

Grid.START_NUM = 1;

Grid.WIN_SCENARIOS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

Grid.isWinningScenario = function(markedScenario) {
  return markedScenario.every(squareState => squareState === markedScenario[0]);
};

Grid.prototype.initialize = function() {
  this.squares = {};

  for (let i = Grid.START_NUM; i <= Grid.SIZE; i += 1) {
    this.squares[i] = new Square(i);
  }
};

Grid.prototype.getAvailableSquareNums = function() {
  let availableSquareNums = [];
  Object.keys(this.squares).forEach(squareKey => { // note that squareKeys are numerical strings, not actual numbers
    if (this.squares[squareKey].isUnmarked()) {
      availableSquareNums.push(squareKey);
    }
  });

  return availableSquareNums;
};

Grid.prototype.isFull = function() {
  return this.getAvailableSquareNums().length === 0;
};

Grid.prototype.getSquare = function(num) {
  return this.squares[String(num)];
};

Grid.prototype.markSquare = function (squareNum, marker) {  
  let square = this.getSquare(squareNum);

  if (!square.isUnmarked()) {
    TEXT.prompt(`ERROR: Square is already marked.`, TEXT.COLORS['invalid']);
    return false;
  }

  square.mark(marker);
  return true;
};

Grid.prototype.stateOfSquare = function(squareNum) {
  return this.getSquare(squareNum).getState();
};

Grid.prototype.getMarkedScenarios = function() {
    return Grid.WIN_SCENARIOS
    .map(scenario => scenario
      .map(squareNum => this.stateOfSquare(squareNum)));
}

Grid.prototype.getMarkerOfWinner = function() {
  let markedScenarios = this.getMarkedScenarios();

  for (let markedScenario of markedScenarios) {
    if (Grid.isWinningScenario(markedScenario)) return markedScenario[0];
  }

  return '';
};

Grid.isStateUnmarked = function(squareState) {
  return !Number.isNaN(Number(squareState));
}

Grid.scenarioHasReqSquaresForWinningMove = function(scenarioTally) {
  return Object.values(scenarioTally).includes(Grid.REQ_SQUARES_FOR_WINNING_MOVE);
}

Grid.scenarioHasOneUnmarkedSquare = function(scenarioTally) {
  return Object.keys(scenarioTally).some(squareState => Grid.isStateUnmarked(squareState));
}

Grid.prototype.getWinningScenarioTallies = function() {
  let markedScenarios = this.getMarkedScenarios();
  let scenarioTallies = markedScenarios.map(scenario => COUNT.tallyFromArray(scenario));

  let winningTallies = scenarioTallies.filter(scenarioTally => Grid.scenarioHasReqSquaresForWinningMove(scenarioTally));
  winningTallies = winningTallies.filter(scenarioTally => Grid.scenarioHasOneUnmarkedSquare(scenarioTally));

  return winningTallies;
}

Grid.prototype.getWinningMoves = function() {
  let winningTallies = this.getWinningScenarioTallies();

  let winningMoves = [];

  for (let tally of winningTallies) {
    let winningMove = {}
    for (let state in tally) {
      let stateCount = tally[state];
      if (stateCount === Grid.REQ_SQUARES_FOR_WINNING_MOVE) {
        winningMove[Round.WINNER] = state;
      } else {
        winningMove[Round.WINNING_MOVE] = state;
      }
    }
    winningMoves.push(winningMove);
  }

  return winningMoves;
}

Grid.prototype.getSquareStatesColored = function() {
  let squaresStates = {};

  for (let squareNum in this.squares) {
    let squareState = this.stateOfSquare(squareNum);
    squaresStates[squareNum] = TEXT
      .colorString(squareState, TEXT.COLORS[squareState]);
  }

  return squaresStates;
};

Grid.prototype.display = function() {
  console.clear();

  function initDataRow(leftSquare, midSquare, rightSquare) {
    return [EMPTY_2X, leftSquare, EMPTY_2X, VERT_SEGMENT, EMPTY_2X, midSquare, EMPTY_2X, VERT_SEGMENT, EMPTY_2X, rightSquare].join('');
  }

  let squaresStates = this.getSquareStatesColored();

  const ROW_2 = initDataRow(squaresStates['1'], squaresStates['2'], squaresStates['3']);
  const ROW_6 = initDataRow(squaresStates['4'], squaresStates['5'], squaresStates['6']);
  const ROW_10 = initDataRow(squaresStates['7'], squaresStates['8'], squaresStates['9']);

  const LINE_BREAK = '\n';
  const GRID_LAYOUT = [EMPTY_ROW, ROW_2, EMPTY_ROW, DIVIDER_ROW, EMPTY_ROW,
    ROW_6, EMPTY_ROW, DIVIDER_ROW, EMPTY_ROW, ROW_10, EMPTY_ROW];

  console.log(`${LINE_BREAK}${GRID_LAYOUT.join(LINE_BREAK)}${LINE_BREAK}`);
};



Grid.prototype.constructor = Grid; // Do we need this if Grid is not a subclass? I don't think so

function Round(playerTurnOrderArr) {
  this.playerTurnOrder = playerTurnOrderArr;
  this.grid = new Grid();
  this.currTurnNumber = 0;
  this.outcome = null;
}

Round.TIE = 'tie';

Round.WINNING_MOVE = 'winningMove';

Round.WINNER = 'winner';

Round.prototype.displayRoundWelcome = function() {
  console.clear();
  TEXT.prompt(`Welcome to this round of ${TTT.NAME}!`);
  USER_INPUT.askToProceed();
};

Round.prototype.updateTurnNumber = function() {
  let nextTurn = this.currTurnNumber + 1;
  let startFromZero = this.playerTurnOrder.length;
  this.currTurnNumber = nextTurn === startFromZero ? 0 : nextTurn;
};

Round.prototype.execTurn = function() {
  this.grid.display();
  let currPlayer = this.playerTurnOrder[this.currTurnNumber];

  let recommendation = currPlayer.getRecommendation.call(this.grid);
  let chosenSquareNum = currPlayer.chooseSquare(recommendation);
  this.grid.markSquare(chosenSquareNum, currPlayer.marker);

  this.grid.display();
  currPlayer.displayChosenSquare(chosenSquareNum);

  this.updateTurnNumber();
};

Round.prototype.isRoundOver = function() {
  if (this.outcome !== null) return true;
  return false;
};

Round.prototype.determineRoundOutcome = function() {
  if (this.grid.isFull()) {
    this.outcome = {constructor: Round.TIE};
  }

  for (let player of this.playerTurnOrder) {
    if (this.grid.getMarkerOfWinner() === player.marker) {
      this.outcome = player;
      break;
    }
  }
};

Round.prototype.displayRoundOutcome = function() {
  console.clear();
  this.grid.display();

  switch (this.outcome.constructor) {
    case Human:
      TEXT.prompt('Congratulations, you have won this round!', TEXT.COLORS['win']);
      break;
    case Computer:
      TEXT.prompt('Your opponent has won this round.', TEXT.COLORS['lose']);
      break;
    case Round.TIE:
      TEXT.prompt(`It's a tie`);
      break;
    default:
      TEXT.prompt('Outcome unclear.');
  }
};

Round.prototype.play = function () {
  this.displayRoundWelcome();

  while (true) {
    this.execTurn();
    this.determineRoundOutcome();
    if (this.isRoundOver()) break;
  }

  this.determineRoundOutcome();
  this.displayRoundOutcome();
};

function TTT() {
  this.computer = new Computer();
  this.human = new Human();
}

TTT.NAME = 'Tic Tac Toe';

TTT.MODES = Object.freeze({singles: 'singles', match: 'match'});

TTT.MATCH_WINNING_SCORE = 3;

TTT.displayGameWelcome = function() {
  console.clear();
  TEXT.prompt(`Welcome to ${TTT.NAME}!`);
};

TTT.displayGameGoobye = function() {
  console.clear();
  TEXT.prompt(`Thank you for playing ${TTT.NAME}! Goodbye!`);
};

TTT.playAnotherRound = function() {
  TEXT.prompt('Would you like to play another round?');
  let response = USER_INPUT.getYesNo();
  if (response === USER_INPUT.affirmativeResponse) return true;
  return false;
};

TTT.prototype.getMode = function() {
  TEXT.prompt('Would you like to play single games or a match of multiple games?');
  this.mode = USER_INPUT.getResponse(Object.values(TTT.MODES));
};

TTT.prototype.playSingles = function() {
  while (true) {
    let round = new Round([this.human, this.computer]);
    round.play();
    if (!TTT.playAnotherRound()) break;
  }
};

TTT.prototype.displayScores = function() {
  let getPlayerString = (player) => TEXT.colorString(`${player.score} point${player.score === 1 ? '' : 's'}`, TEXT.COLORS[player.marker]);
  let humanString = getPlayerString(this.human);
  let computerString = getPlayerString(this.computer);
  let outputString = `You have ${humanString} and your opponent has ${computerString}.`;
  TEXT.prompt(outputString);
};

TTT.prototype.displayMatchWelcome = function() {
  console.clear();
  TEXT.prompt('Welcome to this match!');
  TEXT.prompt(`The first player to win ${TTT.MATCH_WINNING_SCORE} rounds will win this match.`);
  this.displayScores();
  USER_INPUT.askToProceed();
};

TTT.prototype.determineMatchOutcome = function() {
  if (this.human.score === TTT.MATCH_WINNING_SCORE) {
    this.matchOutcome = this.human.marker;
  }

  if (this.computer.score === TTT.MATCH_WINNING_SCORE) {
    this.matchOutcome = this.computer.marker;
  }
};

TTT.prototype.isMatchOver = function() {
  return [this.human.marker, this.computer.marker].includes(this.matchOutcome);
};

TTT.prototype.displayMatchOutcome = function() {
  console.clear();
  this.grid.display();

  TEXT.prompt('The match is over.');
  this.displayScores();

  switch (this.matchOutcome) {
    case this.human.marker:
      TEXT.prompt(`Congratulations, you've won this match!`, TEXT.COLORS['win']);
      break;
    case this.computer.marker:
      TEXT.prompt(`Your opponent has won this match.`, TEXT.COLORS['lose']);
      break;
    default:
      TEXT.prompt('The outcome of this match is unclear.', TEXT.COLORS['invalid']);
  }

  USER_INPUT.askToProceed();
}


TTT.prototype.playThree = function() {
  this.matchOutcome = null;
  this.human.score = 0;
  this.computer.score = 0;
  this.players = [this.computer, this.human];
  this.displayMatchWelcome();

  do {
    let round = new Round(this.players.reverse());
    round.play();
    if (round.outcome.constructor !== Round.TIE) {
      round.outcome.updateScore();
    }

    this.displayScores();
    this.determineMatchOutcome();
    this.grid = round.grid;
    USER_INPUT.askToProceed();
  }
  while (!this.isMatchOver());

  this.displayMatchOutcome();
}

TTT.prototype.start = function() {
  TTT.displayGameWelcome();
  this.getMode();

  switch (this.mode) {
    case TTT.MODES['singles']: 
      this.playSingles();
      break;
    case TTT.MODES['match']:
      this.playThree();
      break;
    default:
      TEXT.prompt('User mode not recognized.', TEXT.COLORS['invalid']);
  }
  
  TTT.displayGameGoobye();
};

// SUPPORTING CODE

TEXT.COLORS[Player.MARKERS[0]] = '\x1b[34m';
TEXT.COLORS[Player.MARKERS[1]] = '\x1b[33m';
TEXT.COLORS['win'] = '\x1b[32m';
TEXT.COLORS['lose'] = '\x1b[31m';
TEXT.COLORS['invalid'] = '\x1b[31m';
TEXT.COLORS['ending'] = '\x1b[0m';
Object.freeze(TEXT.COLORS);


// RUN


let game = new TTT();
game.start();


/*
let grid = new Grid();
grid.markSquare(2, '@')
grid.markSquare(3, '@')
grid.markSquare(5, 'X')
grid.markSquare(6, 'X')
grid.markSquare(9, '@')

console.log(grid.getWinningMoves());
*/


/* 
DEPRECATED: 

Grid.prototype.findAvailableScenarios = function() {
  let markedScenarios = Grid.WIN_SCENARIOS;

  let filteredScenarios = markedScenarios.filter(scenario => scenario.some(squareNum => {
    let square = this.getSquare(squareNum);
    return square.isUnmarked();
  }))

  return filteredScenarios;
};

Grid.prototype.markAvailableScenarios = function() {
  let availableScenarios = this.findAvailableScenarios();
  let markedScenarios = [];

  for (let scenario of availableScenarios) {
    let markedScenario = scenario.map(squareNum => {
      let square = this.getSquare(squareNum);
      if (square.isUnmarked()) return squareNum;
      return square.getState();
    }); 
    markedScenarios.push(markedScenario);
  }

  return markedScenarios;
};

Grid.prototype.tallyAvailableScenarios = function() {
  let markedAvailableScenarios = this.markAvailableScenarios();

  return markedAvailableScenarios.map(scenario => COUNT.tallyFromArray(scenario));
};

Grid.prototype.getWinningScenarios = function() {
  let tallyScenarios = this.tallyAvailableScenarios();

  priorityScenarios = tallyScenarios.filter(scenario => Object.values(scenario).includes(2));

  return priorityScenarios;
}

Grid.prototype.getWinningMoves = function() {
  let winningScenarios = this.getWinningScenarios();

  return winningScenarios.map(scenario => Object.keys(scenario));
};
*/