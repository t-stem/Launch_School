const readlineSync = require("readline-sync");
const VALID_CHOICES = Object.freeze(["rock", "paper", "scissors", "spock", "lizzard"]);
const VALID_SHORT_CHOICES = Object.freeze(["r", "p", "l", "s"]);
const VALID_ANSWERS = Object.freeze(["yes", "y", "no", "n"]); // improvement: removed capitalized versions since .toLowerCase() method is now used consistently
const VALID_MODES = Object.freeze(["one", "five"]);
const USER_WIN = 1; // improvement: added const
const COMPUTER_WIN = -1; // improvement: added const
const TIE = 0; // improvement: added const
const WINNERS = Object.freeze({
    rock: Object.freeze({rock: TIE, paper: COMPUTER_WIN,
        scissors: USER_WIN, spock: COMPUTER_WIN, lizzard: USER_WIN}),
    paper: Object.freeze({rock: USER_WIN, paper: TIE,
        scissors: COMPUTER_WIN, spock: USER_WIN, lizzard: COMPUTER_WIN}),
    scissors: Object.freeze({rock: COMPUTER_WIN, paper: USER_WIN,
        scissors: TIE, spock: COMPUTER_WIN, lizzard: USER_WIN}),
    spock: Object.freeze({rock: USER_WIN, paper: COMPUTER_WIN,
        scissors: USER_WIN, spock: TIE, lizzard: COMPUTER_WIN}),
    lizzard: Object.freeze({rock: COMPUTER_WIN, paper: USER_WIN,
        scissors: COMPUTER_WIN, spock: USER_WIN, lizzard: TIE})
});
const WIN_BOF = 5;

function prompt(message) {
    console.log(`=> ${message}`);
}

function validateInput(chosenInput) {
    return !VALID_CHOICES.includes(chosenInput);
}

function validateSChoices(sChoice) {
    return !VALID_CHOICES.slice(2, 4).includes(sChoice);
}

function getSChoice() {
    let choice;
    do {
        prompt(`Choose ${VALID_CHOICES[2]} or ${VALID_CHOICES[3]}`);
        choice = readlineSync.question().toLowerCase(); // improvement: added .toLowerCase() method
        if (validateSChoices(choice)) {
            prompt("That's not a valid choice");
        }
    }
    while (validateSChoices(choice));
    return choice;
}

function convertShortChoice(shortChoice) {
    switch (shortChoice) {
        case VALID_SHORT_CHOICES[0]:
            return VALID_CHOICES[0];
        case VALID_SHORT_CHOICES[1]:
            return VALID_CHOICES[1];
        case VALID_SHORT_CHOICES[2]:
            return VALID_CHOICES[4];
        case VALID_SHORT_CHOICES[3]:
            return getSChoice();
    }
}

function getInput() {
    let chosenValue;

    do {
        prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
        chosenValue = readlineSync.question().toLowerCase();
        if (VALID_SHORT_CHOICES.includes(chosenValue)) {
            chosenValue = convertShortChoice(chosenValue);
        }
        if (validateInput(chosenValue)) {
            prompt("That's not a valid choice.");
        }
    }
    while (validateInput(chosenValue));

    return chosenValue;
}

function determineWinner(userChoice, computerChoice) {
    return WINNERS[userChoice][computerChoice];
}

function displayWinner(winner) {
    switch (winner) {
        case COMPUTER_WIN:
            prompt("Computer wins!");
            break;
        case TIE:
            prompt("It's a tie");
            break;
        case USER_WIN:
            prompt("You win!");
            break;
    }
}

function validateAnswer(chosenAnswer) {
    return !VALID_ANSWERS.includes(chosenAnswer);
}

function playGame() {
    let playerChoice = getInput();
    let randomIndex = Math.floor(Math.random() * (VALID_CHOICES.length));
    let opponentChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${playerChoice}, computer chose ${opponentChoice}`);

    return determineWinner(playerChoice, opponentChoice);
}

function playSingle() {
    while (true) {
        displayWinner(playGame());

        let answer;
        do {
            prompt("Do you want to play again (y/n)?");
            answer = readlineSync.question().toLowerCase();
            if (validateAnswer(answer)) {
                prompt("That's not a valid answer");
            }
        }
        while (validateAnswer(answer));

        if (VALID_ANSWERS.slice(2, 4).includes(answer)) break;
        console.clear(); // improvement: added
    }
}

function playBestOfFive() {
    let scoreUser = 0;
    let scoreComputer = 0;

    while (scoreUser < WIN_BOF && scoreComputer < WIN_BOF) { // improvement: replaced 5 with const WIN_BOF
        let winner = playGame();
        displayWinner(winner);

        if (winner === COMPUTER_WIN) { // improvement: replaced magic number
            scoreComputer += 1;
        } else if (winner === USER_WIN) { // improvement: replaced magic number
            scoreUser += 1;
        }

        prompt(`Your score: ${scoreUser}, computer score: ${scoreComputer}`);
    }

    if (scoreUser === WIN_BOF) { // improvement: replaced 5 with const WIN_BOF
        prompt("You won best of five!");
    } else if (scoreComputer === WIN_BOF) { // improvement: replaced 5 with const WIN_BOF
        prompt("Computer won best of five!");
    }
}

function validateMode(chosenMode) {
    return !VALID_MODES.includes(chosenMode);
}

let mode;
do {
    prompt("Play a single game or best of five? Enter 'one' or 'five': ");
    mode = readlineSync.question().toLowerCase(); // improvement: added .toLowerCase() method
    if (validateMode(mode)) {
        prompt("That's not a valid mode");
    }
}
while (validateMode(mode));

if (mode === "one") {
    playSingle();
} else if (mode === "five") {
    playBestOfFive();
}