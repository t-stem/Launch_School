const readlineSync = require('readline-sync');

const WINNING_SCORE = 5;

const MODES = Object.freeze({singles: 'Singles', five: 'Five'});

const CONTESTANTS = Object.freeze({human: 'human', computer: 'computer'});

const CHOICES = Object.freeze(['Rock', 'Paper', 'Scissors', 'Spock', 'Lizzard']);
const CHOICES_OBJ = {};
CHOICES.forEach(choice => CHOICES_OBJ[choice] = choice);
Object.freeze(CHOICES_OBJ)

const RULES = Object.freeze({ // computerChoice: winningHumanChoice, losingHumanChoice
  [CHOICES_OBJ['Rock']]: Object.freeze({
    win: [CHOICES_OBJ['Paper'], CHOICES_OBJ['Spock']],
    lose: [CHOICES_OBJ['Scissors'], CHOICES_OBJ['Lizzard']], 
  }),
  [CHOICES_OBJ['Paper']]: Object.freeze({
    win: [CHOICES_OBJ['Scissors'], CHOICES_OBJ['Lizzard']],
    lose: [CHOICES_OBJ['Rock'],  CHOICES_OBJ['Spock']],
  }),
  [CHOICES_OBJ['Scissors']]: Object.freeze({
    win: [CHOICES_OBJ['Rock'], CHOICES_OBJ['Spock']],
    lose: [CHOICES_OBJ['Paper'], CHOICES_OBJ['Lizzard']], 
  }),
  [CHOICES_OBJ['Spock']]: Object.freeze({
    win: [CHOICES_OBJ['Paper'], CHOICES_OBJ['Lizzard']],
    lose: [CHOICES_OBJ['Scissors'], CHOICES_OBJ['Rock']], 
  }),
  [CHOICES_OBJ['Lizzard']]: Object.freeze({
    win: [CHOICES_OBJ['Rock'], CHOICES_OBJ['Scissors']], 
    lose: [CHOICES_OBJ['Paper'], CHOICES_OBJ['Spock']],
  })
});

const OUTCOMES = Object.freeze({win: 'win', lose: 'lose', tie: 'tie'});

const COLORS = {};
COLORS['player'] = '\x1b[34m';
COLORS['computer'] = '\x1b[33m';
COLORS[OUTCOMES['win']] = '\x1b[32m';
COLORS[OUTCOMES['lose']] = '\x1b[31m';
COLORS['invalidInput'] = '\x1b[31m';
COLORS['ending'] = '\x1b[0m';
Object.freeze(COLORS);

const TEXT = Object.freeze({
  prompt(promptString, color = '') {
    let colorEnding = color ? COLORS['ending'] : '';
    let colorBeginning = color;

    console.log(`>>> ${colorBeginning}${promptString}${colorEnding}`);
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
  }
});

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
}

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

      TEXT.prompt(`Sorry, invalid response. Valid responses include: ${TEXT.presentOptions(validResponses.sort())}.`, COLORS['invalidInput']);
    }
  },

  lookupChosenOption(chosenOption, validResponsesPerOption) {
    for (let option in validResponsesPerOption) {
      if (validResponsesPerOption[option].includes(chosenOption)) return option;
    }
  },

  initValidSubstringsPerOption(stringsArr) {
    let substringsOfStrings = {};

    stringsArr.forEach(string => {
      substringsOfStrings[string] = TEXT.leadingSubstrings(string);
    });

    let substringsTally = COUNT.tallyFromArray(Object.values(substringsOfStrings).flat());
    
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

    for(let option in validResponsesPerOption) {
      validResponsesPerOption[option] = validResponsesPerOption[option].map(response => response.toLowerCase())
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

function Player() { 
  this.choice = null;
}

function Human() { 
}

Human.prototype = Object.create(Player.prototype);
Human.prototype.choose = function() {
  this.choice = USER_INPUT.getResponse(CHOICES);
}

function Computer() { 
};

Computer.prototype = Object.create(Player.prototype);
Computer.prototype.choose = function() {
  let choiceIndex = Math.floor(Math.random() * CHOICES.length);
  this.choice = CHOICES[choiceIndex];
}

function RPS() {
  this.human = new Human();
  this.computer = new Computer();
  this.mode = null;
  this.outcome = null;
  this.winner = null;
};

RPS.prototype.displayRoundWelcome = function() {
  console.clear();
  TEXT.prompt('Welcome to this round of Rock, Paper, Scissors!');
}

RPS.prototype.determineOutcome = function() {
  if (this.computer.choice === this.human.choice) {
    this.outcome = OUTCOMES['tie'];
    return;
  }

  let winningChoices = RULES[this.computer.choice]['win'];
  let losingChoices = RULES[this.computer.choice]['lose'];

  if (winningChoices.includes(this.human.choice)) {
    this.outcome = OUTCOMES['win'];
    return;
  }

  if (losingChoices.includes(this.human.choice)) {
    this.outcome = OUTCOMES['lose'];
    return;
  }

  this.outcome = 'Cannot be determined';
},

RPS.prototype.displayOutcome = function() {
  console.clear();
  TEXT.prompt(`You chose: ${this.human.choice}.`, COLORS['player']);
  TEXT.prompt(`Your opponent chose: ${this.computer.choice}.`, COLORS['computer']);

  switch (this.outcome) {
    case OUTCOMES['win']:
      TEXT.prompt('Congratulations, you have won this round!', COLORS['win']);
      break;
    case OUTCOMES['lose']:
      TEXT.prompt('Your opponent has won this round.', COLORS['lose']);
      break;
    case OUTCOMES['tie']:
      TEXT.prompt(`It's a tie.`);
      break;
    default:
      TEXT.prompt('Outcome of round unclear.');
  }
}

RPS.prototype.playAgain = function() {
  TEXT.prompt(`Would you like to play again?`);
  let userReponse = USER_INPUT.getYesNo();
  return USER_INPUT.respondedYes(userReponse);
}

RPS.prototype.playRound = function() {
  this.displayRoundWelcome();
  this.outcome = null;
  this.human.choose();
  this.computer.choose();
  this.determineOutcome();
  this.displayOutcome();
}

RPS.prototype.playSingles = function() {
  while (true) {
   this.playRound();
    if (!this.playAgain()) break;
  }
}

RPS.prototype.initializeScores = function() {
  this.scores = {};
  this.scores[CONTESTANTS['human']] = 0;
  this.scores[CONTESTANTS['computer']] = 0;
}

RPS.prototype.updateScores = function() {
  if (this.outcome === OUTCOMES['win']) {
    this.scores[CONTESTANTS['human']] += 1;

  } else if (this.outcome === OUTCOMES['lose']) {
    this.scores[CONTESTANTS['computer']] += 1;
  }
}

RPS.prototype.displayScores = function() {
  let humanScore = this.scores[CONTESTANTS['human']];
  let computerScore = this.scores[CONTESTANTS['computer']];
  TEXT.prompt(`You have ${humanScore} ${humanScore === 1 ? 'point' : 'points'} and your opponent has ${computerScore} ${computerScore === 1 ? 'point' : 'points'}.`);
}

RPS.prototype.determineWinner = function() {
  if (this.scores[CONTESTANTS['human']] === WINNING_SCORE) {
    this.winner = OUTCOMES['win'];
  } else if (this.scores[CONTESTANTS['computer']] === WINNING_SCORE) {
    this.winner = OUTCOMES['lose'];
  }
}

RPS.prototype.displayWinner = function() {
  USER_INPUT.askToProceed();
  console.clear();
  this.displayScores();

  switch (this.winner) {
    case OUTCOMES['win']:
      TEXT.prompt('Congratulations, you have won this match of first-to-reach-five!', COLORS['win']);
      break;
    case OUTCOMES['lose']:
      TEXT.prompt('Your opponent has won this match of first-to-reach-five!', COLORS['lose']);
      break;
    case OUTCOMES['tie']:
      TEXT.prompt(`It's a tie.`);
      break;
    default:
      TEXT.prompt('Outcome of match unclear.');
  }
}

RPS.prototype.displayMatchWelcome = function() {
  console.clear();
  TEXT.prompt('Welcome to this match of first-to-reach-five!');
  TEXT.prompt('The first player to reach five points will win this match.');
}

RPS.prototype.playTillFive = function() {
  this.initializeScores();
  this.displayMatchWelcome();
  this.displayScores();
  
  while (this.winner === null) {
    USER_INPUT.askToProceed();
    this.playRound();
    this.updateScores();
    this.displayScores();
    this.determineWinner();
  }

  this.displayWinner();
}

RPS.prototype.displayGameWelcome = function() {
  console.clear();
  TEXT.prompt('Welcome to Rock, Paper, Scissors!');
  TEXT.prompt('Would you like to play single rounds or first-to-reach-five?');
}

RPS.prototype.chooseMode = function() {
  let modeValues = Object.values(MODES);
  this.mode = USER_INPUT.getResponse(modeValues);
}

RPS.prototype.displayGameGoodbye = function() {
  console.clear();
  TEXT.prompt('Thank you for playing Rock, Paper, Scissors! Goodbye!');
}

RPS.prototype.play = function() {
  console.clear();
  this.displayGameWelcome();
  this.chooseMode();

  switch (this.mode) {
    case MODES['singles']:
      this.playSingles();
      break;
    case MODES['five']:
      this.playTillFive();
      break;
    default:
      TEXT.prompt('Chosen mode unclear.');
  }
  
  USER_INPUT.askToProceed();
  this.displayGameGoodbye();
}

let game = new RPS();
game.play()


/*
DEPRECATED:
 initValids(stringsArr) {
    let substringsPerString = {};
    stringsArr
      .forEach(input => {
        substringsPerString[input] = TEXT.leadingSubstrings(input);
      });
    
    let stringKeys = Object.keys(substringsPerString);

    for (let currKeyIndex = 0; currKeyIndex < stringKeys.length; currKeyIndex += 1) {
      let currStringKey = stringKeys[currKeyIndex];
      let currSubstrings = substringsPerString[currStringKey];

      for (let currSubstringIndex = 0; currSubstringIndex < currSubstrings.length; currSubstringIndex += 1) {
        let currSubstring = currSubstrings[currSubstringIndex];
        let currSubstringValid = true;

        for (let nextKeyIndex = 0; nextKeyIndex < stringKeys.length; nextKeyIndex += 1) {
          if (nextKeyIndex === currKeyIndex) continue;

          let nextStringKey = stringKeys[nextKeyIndex];
          let nextSubstrings = substringsPerString[nextStringKey];

          if (nextSubstrings.includes(currSubstring)) {
            currSubstringValid = false;
            break;
          }
        }

        if (currSubstringValid) {
          substringsPerString[currStringKey] = currSubstring;
          break;
        }
      }

    }

    return substringsPerString;
  },
  */