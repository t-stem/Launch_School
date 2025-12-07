const readlineSync = require("readline-sync");
const VALID_CHOICES = Object.freeze(["rock", "paper", "scissors", "spock", "lizzard"]);
const VALID_SHORT_CHOICES = Object.freeze(["r", "p", "l", "s"]);
const VALID_ANSWERS = Object.freeze(["Yes", "yes", "y", "No", "no", "n"]);
const VALID_MODES = Object.freeze(["one", "five"]);
const WINNERS = Object.freeze({
    rock: Object.freeze({rock: 0, paper: -1, scissors: 1, spock: -1, lizzard: 1}),
    paper: Object.freeze({rock: 1, paper: 0, scissors: -1, spock: 1, lizzard: -1}),
    scissors: Object.freeze({rock: -1, paper: 1, scissors: 0, spock: -1, lizzard: 1}),
    spock: Object.freeze({rock: 1, paper: -1, scissors: 1, spock: 0, lizzard: -1}),
    lizzard: Object.freeze({rock: -1, paper: 1, scissors: -1, spock: 1, lizzard: 0})
});

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
        choice = readlineSync.question();
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

let determineWinner = function(userChoice, computerChoice) {
    return WINNERS[userChoice][computerChoice];
};

function displayWinner(winner) {
    switch (winner) {
        case -1:
            prompt("Computer wins!");
            break;
        case 0:
            prompt("It's a tie");
            break;
        case 1:
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
            answer = readlineSync.question();
            if (validateAnswer(answer)) {
                prompt("That's not a valid answer");
            }
        }
        while (validateAnswer(answer));

        if (VALID_ANSWERS.slice(3, 6).includes(answer)) break;
    }
}

function playBestOfFive() {
    let scoreUser = 0;
    let scoreComputer = 0;

    while (scoreUser < 5 && scoreComputer < 5) {
        let winner = playGame();
        displayWinner(winner);

        if (winner === -1) {
            scoreComputer += 1;
        } else if (winner === 1) {
            scoreUser += 1;
        };

        prompt(`Your score: ${scoreUser}, computer score: ${scoreComputer}`);
    }

    if (scoreUser === 5) {
        prompt("You won best of five!");
    } else if (scoreComputer === 5) {
        prompt("Computer won best of five!");
    };
}

function validateMode(chosenMode) {
    return !VALID_MODES.includes(chosenMode);
}

let mode;
do {
    prompt("Play a single game or best of five? Enter 'one' or 'five': ");
    mode = readlineSync.question().toLowerCase();
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

