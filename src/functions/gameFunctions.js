const path = require("path");
const check = require("./checkFunctions");
const Deck = require(path.join(__dirname, "../helpers/class/Deck"));
const draw = new Deck();

function drawCard(hand) {
  const card = draw.drawCard();
  console.log(card.name, card.suit, card.value);

  hand.push(card);

  return card;
}

// Create two instances of drawCard function
const playerDrawCard = (playerHand) => drawCard(playerHand);
const dealerDrawCard = (dealerHand) => drawCard(dealerHand);

function startGame() {
  console.log("Starting a new game of Blackjack...\n");

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");

  console.log("Your bank is now " + playerBank + ".\n");

  // Deal initial hands to player and dealer
  playerDrawCard(playerHand);
  console.log("Player dealt " + playerHand[0].name + " of " + playerHand[0].suit + ".");

  dealerDrawCard(dealerHand);
  console.log("Dealer dealt a face down card.");

  playerDrawCard(playerHand);
  console.log("Player dealt " + playerHand[1].name + " of " + playerHand[1].suit + ".");

  dealerDrawCard(dealerHand);
  console.log("Dealer dealt " + dealerHand[1].name + " of " + dealerHand[1].suit + ".");
}

module.exports = {
  startGame,
  playerDrawCard,
  dealerDrawCard
};
