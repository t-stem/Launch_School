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
  }
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
    readlineSync.question(`Please hit 'enter' to proceed.`);
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

function Human() {
  Player.call(this);
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.constructor = Human;

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

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.chooseSquare = function(availableSquares) {
  let chosenIndex = Math.floor(Math.random() * availableSquares.length);
  return availableSquares[chosenIndex];
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

Grid.SIZE = 9;

Grid.CONSEC_SQUARES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

Grid.prototype.initialize = function() {
  this.squares = {};

  for (let i = 1; i <= Grid.SIZE; i += 1) {
    this.squares[i] = new Square(i);
  }
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

Grid.prototype.markerOfConsecSquares = function() {
  for (let consecSquares of Grid.CONSEC_SQUARES) {
    let consecSquareStates = consecSquares.map(squareNum => {
      return this.stateOfSquare(String(squareNum));
    });

    if (consecSquareStates
      .every(squareState => squareState === consecSquareStates[0])
    ) {
      return consecSquareStates[0];
    }
  }

  return '';
};

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

Grid.prototype.getAvailableSquares = function() {
  let availableSquares = [];
  Object.keys(this.squares).forEach(squareKey => { // note that squareKeys are numerical strings, not actual numbers
    if (this.squares[squareKey].isUnmarked()) {
      availableSquares.push(squareKey);
    }
  });

  return availableSquares;
};

Grid.prototype.isFull = function() {
  return this.getAvailableSquares().length === 0;
};

Grid.prototype.constructor = Grid; // Do we need this if Grid is not a subclass? I don't think so

function Round(playerTurnOrderArr) {
  this.playerTurnOrder = playerTurnOrderArr;
  this.grid = new Grid();
  this.currTurnNumber = 0;
  this.outcome = null;
}

Round.TIE = 'tie';

Round.prototype.displayRoundWelcome = function() {
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

  let availableSquares = this.grid.getAvailableSquares();
  let chosenSquareNum = currPlayer.chooseSquare(availableSquares);
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
    this.outcome = Round.TIE;
  }

  for (let player of this.playerTurnOrder) {
    if (this.grid.markerOfConsecSquares() === player.marker) {
      this.outcome = player.constructor;
      break;
    }
  }
};

Round.prototype.displayRoundOutcome = function () {
  console.clear();
  this.grid.display();

  switch (this.outcome) {
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
}

TTT.NAME = 'Tic Tac Toe';

TTT.prototype.play = function() {
  this.displayGameWelcome();
  this.computer = new Computer();
  this.human = new Human();
  this.round = new Round([this.human, this.computer]);
  this.round.play();
  this.displayGameGoobye();
};

TTT.prototype.displayGameWelcome = function() {
  console.clear();
  TEXT.prompt(`Welcome to ${TTT.NAME}!`);
};

TTT.prototype.displayGameGoobye = function() {
  TEXT.prompt(`Thank you for playing ${TTT.NAME}! Goodbye!`);
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
game.play();
