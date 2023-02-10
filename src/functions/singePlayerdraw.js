// const drawCard = require('../helpers/drawCard.js');

// Declare variables
var players = [];
var playerHand = [];
var dealerHand = [];
var dealerFaceDown = [];
var dealerUp = [];
var playerTotal = 0;
var dealerTotal = 0;

function dealGame() {
  //draw a card from the deck using the drawCard function
  const drawCard = async () => {
    const fs = require("fs");
    const path = require("path");
    // const delay = require("./delayScript");
    const shoe = require("../db/activeShoe.json");
    const length = shoe.cards.length;
    const r = Math.floor(Math.random() * length);
    const cardSelected = await shoe.cards[r];

    // remove from active Shoe JSON
    await shoe.cards.splice(r, 1);
    // update activeShoe.json
    await fs.readFile(
      path.join(__dirname, "../db/usedShoe.json"),
      (err, data) => {
        if (err) throw err;
        let usedShoe = JSON.parse(data);
        usedShoe.push(cardSelected);
        fs.writeFile(
          path.join(__dirname, "../db/usedShoe.json"),
          JSON.stringify(usedShoe),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
        return cardSelected;
      }
    );
  };
var playerHand = drawCard();

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
  // adds face down card to dealerFaceDown
  dealerFaceDown.push(dealerCard);

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
  // adds face down card to dealerFaceDown
  dealerUp.push(dealerCard);

  // check dealerUp to see if it's an Ace
  if (dealerUp[0].name === "Ace") {
    console.log("The dealer has an Ace. No insurance available.");
  } else if (dealerUp[0].value === 10) {
    // check if dealerFaceDown is a 10
    if (dealerFaceDown[0].value === 10) {
      console.log("Dealer has Blackjack! You lose.");
      endGame();
    } else {
      console.log("Nobody home...");
    }
  }
  // check dealerUp to see if is a 10 value
  if (dealerUp[0].value === 10) {
    console.log("Checking for Blackjack...");
    // check if dealerFaceDown is an Ace
    if (dealerFaceDown[0].name === "Ace") {
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
    "Dealer has " + dealerUp[0].name + " of " + dealerUp[0].suit + ". You win!"
  );
  if (playerTotal < 21) {
  }

  // adds dealerCard to dealerTotal
  dealerTotal = dealerTotal + dealerCard.value;
}
dealGame();
