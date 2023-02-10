// Declare variables
var playerHand = [];
var dealerHand = [];
var faceDownArray = [];
var dealerUp = [];
var playerTotal = 0;
var dealerTotal = 0;

// Dependencies
const fs = require("fs");
const path = require("path");
const deck = require(path.join(__dirname, "../db/activeShoe.json"));

function dealGame() {
  // selects random card from deck
  var r = Math.floor(Math.random() * deck.cards.length);
  var playerCard = deck.cards[r];

  // draws card from activeShoe.json, adds to playerHand array, and removes from activeShoe.json
  playerHand.push(playerCard);
  deck.cards.splice(deck.cards.indexOf(playerCard), 1);
  //logs the playerCard to the console
  console.log(
    "The dealer has dealt the player a " +
      playerCard.name +
      " of " +
      playerCard.suit
  );
  // adds playerCard to playerTotal
  playerTotal = playerTotal + playerCard.value;

  //

  // draws a different card from activeShoe.json, adds to dealerHand array, and removes from activeShoe.json
  var dealerCard = deck.cards[r];
  dealerHand.push(dealerCard);
  deck.cards.splice(deck.cards.indexOf(dealerCard), 1);
  //logs the dealerCard to the console
  console.log("The dealer has dealt it's first card. Which is face down.");
  // adds face down card to faceDownArray
  faceDownArray.push(dealerCard);

  // adds dealerCard to dealerTotal
  dealerTotal = dealerTotal + dealerCard.value;

  playerCard = deck.cards[r];
  playerHand.push(playerCard);
  deck.cards.splice(deck.cards.indexOf(playerCard), 1);
  //logs the playerCard to the console
  console.log(
    "The dealer has dealt the player a " +
      playerCard.name +
      " of " +
      playerCard.suit
  );
  // adds playerCard to playerTotal
  playerTotal = playerTotal + playerCard.value;

  dealerCard = deck.cards[r];
  dealerHand.push(dealerCard);
  deck.cards.splice(deck.cards.indexOf(dealerCard), 1);
  //logs the dealerCard to the console
  console.log(
    "The dealer has dealt it's second card. Which is " +
      dealerCard.name +
      " of " +
      dealerCard.suit +
      "."
  );
  // adds face down card to faceDownArray
  dealerUp.push(dealerCard);

  // check dealerUp to see if it's an Ace
  if (dealerUp[0].name === "Ace") {
    console.log("The dealer has an Ace. No insurance available.");
  } else if (dealerUp[0].value === 10) {
    // check if faceDownArray is a 10
    if (faceDownArray[0].value === 10) {
      console.log("Dealer has Blackjack! You lose.");
      endGame();
    } else {
      console.log("Nobody home...");
    }
  }
  // check dealerUp to see if is a 10 value
  if (dealerUp[0].value === 10) {
    console.log("Checking for Blackjack...");
    // check if faceDownArray is an Ace
    if (faceDownArray[0].name === "Ace") {
      console.log("Dealer has Blackjack! You lose.");
      endGame();
    }
  }
 // console.log both total values to the console
    console.log("Player Hand Total: " + playerTotal);
    console.log("Dealer showing: " + dealerUp[0].value);
    //hit player hand until player has at 17 or more
    while (playerTotal < 17) {
      console.log(playerHand[0].name + " of " + playerHand[0].suit);
      playerTotal = playerTotal + playerHand[0].value;
      playerHand.splice(0, 1);
      console.log("Player Hand Total: " + playerTotal);
      console.log("Dealer showing: " + dealerUp[0].value);
    }
    console.log(
      "Dealer has " +
        dealerUp[0].name +
        " of " +
        dealerUp[0].suit +
        ". You win!"
    );
    if (playerTotal < 21) {
        
    }

  // adds dealerCard to dealerTotal
  dealerTotal = dealerTotal + dealerCard.value;
}
dealGame();
