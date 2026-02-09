const readlineSync = require('readline-sync');

const CHOICES = Object.freeze(['Rock', 'Paper', 'Scissors']);

const RULES = Object.freeze({ // Choice: Win, Lose
  [CHOICES[0]]: Object.freeze({win: CHOICES[2], lose: CHOICES[1]}),
  [CHOICES[1]]: Object.freeze({win: CHOICES[0], lose: CHOICES[2]}),
  [CHOICES[2]]: Object.freeze({win: CHOICES[1], lose: CHOICES[0]})
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
  }
});

const USER_INPUT = Object.freeze({
  getResponse(displayOptionsArr) { // ONLY WORKS IF ALL POSSIBLE RESPONSES START WITH DIFFERENT LETTERS
    let validInputs = this.initValidInputs(displayOptionsArr);

    while (true) {
      let userResponse = readlineSync
        .question(`Please enter ${TEXT.presentOptions(displayOptionsArr)}: `)
        .trim()
        .toLowerCase();

      if (validInputs.includes(userResponse)) {
        return this.lookupChosenOption(userResponse, displayOptionsArr);
      }

      TEXT.prompt(`Sorry, invalid response. Valid responses include: ${TEXT.presentOptions(validInputs)}.`, COLORS['invalidInput']);
    }
  },

  initValidInputs(inputsArr) {
    return inputsArr
      .map(input => [
        input.toLowerCase(),
        input[0].toLowerCase(),
      ])
      .flat();
  },

  lookupChosenOption(validResponse, options) {
    for (let option of options) {
      if (this.initValidInputs([option]).includes(validResponse)) {
        return option;
      }
    }
  },

  affirmativeResponse: 'Yes',

  negativeResponse: 'No',

  getYesNo() {
    return this.getResponse([this.affirmativeResponse, this.negativeResponse]);
  },

  respondedYes(response) {
    return response === this.affirmativeResponse;
  }
});

function createPlayer() {
  return {
    choice: null,
  };
}

function createHuman() {
  let playerObj = createPlayer();

  let humanObj = {
    choice: null,

    choose() {
      this.choice = USER_INPUT.getResponse(CHOICES);
    }
  };

  return Object.assign(playerObj, humanObj);
}

function createComputer() {
  let playerObj = createPlayer();

  let computerObj = {
    choice: null,

    choose() {
      let choiceIndex = Math.floor(Math.random() * CHOICES.length);
      this.choice = CHOICES[choiceIndex];
    }
  };

  return Object.assign(playerObj, computerObj);
}

const GAME = {
  human: createHuman(),
  computer: createComputer(),
  outcome: null,

  playAgain() {
    TEXT.prompt(`Would you like to play again?`);
    let userReponse = USER_INPUT.getYesNo();
    return USER_INPUT.respondedYes(userReponse);
  },

  play() {
    this.displayWelcomeMessage();

    while (true) {
      this.human.choose();
      this.computer.choose();
      this.determineWinner();
      this.displayWinner();
      if (!this.playAgain()) break;
      console.clear();
      this.outcome = null;
    }

    this.displayGoodbyeMessage();
  },

  displayWelcomeMessage() {
    console.clear();
    TEXT.prompt('Welcome to Rock, Paper, Scissors!');
  },

  determineWinner() {
    switch (this.computer.choice) {
      case this.human.choice:
        this.outcome = OUTCOMES['tie'];
        break;
      case RULES[this.human.choice]['win']:
        this.outcome = OUTCOMES['win'];
        break;
      case RULES[this.human.choice]['lose']:
        this.outcome = OUTCOMES['lose'];
        break;
      default:
        this.outcome = 'Cannot be determined.';
    }
  },

  displayWinner() {
    console.clear();
    TEXT.prompt(`You chose: ${this.human.choice}.`, COLORS['player']);
    TEXT.prompt(`Your opponent chose: ${this.computer.choice}.`, COLORS['computer']);

    switch (this.outcome) {
      case OUTCOMES['win']:
        TEXT.prompt('Congratulations, you have won!', COLORS['win']);
        break;
      case OUTCOMES['lose']:
        TEXT.prompt('Your opponent has won.', COLORS['lose']);
        break;
      case OUTCOMES['tie']:
        TEXT.prompt(`It's a tie.`);
        break;
      default:
        TEXT.prompt('Outcome unclear.');
    }
  },

  displayGoodbyeMessage() {
    console.clear();
    TEXT.prompt('Thank you for playing Rock, Paper, Scissors! Goodbye!');
  }
};

GAME.play();