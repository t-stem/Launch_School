PEDAC

# PROBLEM
## Inputs
- Deck: 
  * Start with a standard 52-card deck 
  * Consisting of the 4 suits (Hearts, Diamonds, Clubs, and Spades)
  * Each suit consisting of 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace).

## Outputs
-

## Explicit rules
- The goal is to try to get as close to 21 as possible without going over. 
- If you go over 21, it's a bust, and you lose.

- The game consists of a dealer and a player. 
- Both participants are initially dealt a hand of two cards. 
- The player can see their own 2 cards, 
- The player can only see one of the dealer's cards.

- Card values
  * Card	Value
  * 2 - 10	face value
  * Jack, Queen, King	10
  * Ace	1 or 11
    - Its value is determined each time a new card is **drawn** from the deck.
    - If the sum of the new hand including the ace doesn't exceed 21 (i.e. <= 21), it will be worth 11
      - Otherwise, it will be worth 1
    - If two aces are in hand 
      - If the sum of the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be worth 1, resulting in the hand's total value being 19.
    
- Player turns
  * The player always goes first
  * The player can decide to either hit or stay
    - A hit means the player wants to be dealt another card
    - Remember, if his total exceeds 21, he will bust and lose the game.
    - The player can continue to hit as many times as they want. 
    - The turn is over when the player either busts or stays
    - If the player busts, the game is over, and the dealer won.

- Dealer turns
  * When the player stays, it's the dealer's turn
  * **The dealer must follow a strict rule for determining whether to hit or stay: hit until the total is at least 17. *
  * If the dealer busts, then the player wins.

- When both the player and the dealer stay, it's time to compare the total value of the cards and see who has the highest value.


## Implicit rules
- Suit doesn't matter, only numberical value of the cards
- Winner is determined after the dealer stays or busts

## Questions
- Is the value of an ace fixed once it's been added to a hand?
  * **No, it is re-evaluated every time the hand's total is calculated to give the most favorable score (closest to 21 without busting).** 
- Hand total is only calculaten when a card is drawn?
  * Yes
- Player draws directly from the deck, not from the dealer's hand?
  * Yes
- which of the dealer's cards can the player see? the first or the second one?
  * Implementation detail, can be either. Usually the first one.
- if the dealer has an ace, does the player get to know the value of the ace?
  * No


# EXAMPLES/TEST CASES


# DATA STRUCTURES
- Object VALUES contains all cards within a suit with their corresponding values
  * Aces will be assigned a default ACE value which equals zero (falsy as opposed to the other cards)
- Array SUIT contains all the keys of the VALUES object
- Array FULl_DECK contains SUIT plus three concatinations of SUIT

- Array shuffledDeck will contain the shuffled deck for this game
- Array playerHand will contains the cards in the player's hand
- Array dealerHand will contains the cards in the dealer's hand 
  * Every card is represented by and object containing a single key value pair where the key specifies the type of card and the value its value


# ALGORITHM

## initializeDeck()
SET outputDeck = empty array
SET totalCards = length of FULL_DECK
SET currentCard = 0
WHILE currentCard < totalCards
  Append FULL_DECK[currentCard] to outputDeck;
  SET currentCard += 1;
RETURN outputDeck

## randomCardIndex(finalIndex)
RETURN random number between 0 and finalIndex

## shuffleDeck(inputDeck)
SET totalCards = length of inputDeck
SET finalCardIndex = totalCards - 1
WHILE finalCardIndex >= 0;
  SET randomCardIndex = randomNumber(finalCardIndex);
  SET randomCard = card located at position randomCardIndex
  Remove randomCard from the deck
  Append randomCard to the final position in the deck
  SET finalCardIndex =- 1;
RETURN nothing, only mutate argument

## drawFromDeck(inputHand, inputDeck)
SET finalCardIndex = lenght of inputDeck - 1
SET drawnCardIndex = randomCardIndex(finalCardIndex)
Remove card at position drawnCardIndex from inputDeck (mutating)
SET drawnCard = removed card from position drawnCardIndex ofinputDeck
SET cardValue = READ value of the card from VALUES object
SET card = object with drawnCard as its key and cardValue as its value
Add the drawn card to inputHand (mutating)
RETURN nothing

## initializeHand(inputDeck)
SET card = 0;
SET hand = empty array
WHILE card < 2
  drawFromDeck(hand, inputDeck)
RETURN hand

## calcValueHand(inputHand)
SET sum = 0

FOR every currentCard in the hand
  IF currentCard is not an ace
    sum += cardValue
  ELSE
    skip currentCard

FOR every currentCard in the hand
  IF currentCard is an ace
    IF sum + 11 <= 21
      SET ace's value to 11
      sum += 11
    ELSE 
      SET ace's value to 1
      sum += 1

RETURN sum

## playerTurn(inputHand, inputDeck)
SET playerStay = false
SET handValue = calcHandValue(inputHand)

WHILE playerStay equals false
  PRINT cards in inputHand, value of aces in inputHand and handValue
  GET hit or stay
  IF hit
    drawFromDeck(inputHand, inputDeck)
    SET handValue = calcValueHand(inputHand)
    IF handValue > 21
      RETURN 0
  IF stay
    set playerStay = true

RETURN handValue

## dealerTurn(inputHand, inputDeck)
SET dealerStay = false
SET handValue = calcHandValue(inputHand)

WHILE handValue < 17
  drawFromDeck(inputHand, inputDeck)
  SET handValue = calcHandValue(inputHand)
  IF handValue > 21
    RETURN 0

RETURN handValue

## playGame()
SET gameDeck = initializeDeck()
SET playerHand = initializeHand(gameDeck)
SET dealerHand = initializeHand(gameDeck)

SET playerOutcome = playerTurn()
IF playerOutcome = 0
  SET dealerOutcome = calcHandValue(dealerHand)
  displayOutcome(playerOutcome, playerHand, dealerOutcome, dealerHand)
ELSE
  SET dealerOutcome = dealerTurn()
  displayOutcome(playerOutcome, playerHand, dealerOutcome, dealerHand)

PRINT 'Thanks for playing'

# CODE