const path = require("path");
const Deck = require(path.join(__dirname, "../helpers/class/Deck"));
const draw = new Deck();

const delay = require(path.join(__dirname, "../helpers/delayScript"));

const playerBet = 25;
let playerBank = 1000;

async function drawCard() {
  const card = await draw.drawCard();
  console.log(card.name, card.suit, card.value);

  return card;
}

async function startGame() {
  console.log("Starting a new game of Blackjack...\n");

  let playerHand = [];
  let dealerHand = [];
  let dealerDown = [];
  let dealerUp = [];
  let playerHandValue = 0;
  let dealerHandValue = 0;
  let playerBust = false;
  let dealerBust = false;
  let playerTotal = 0;
  let dealerTotal = 0;

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");

  console.log("Your bank is now " + playerBank + ".\n");

  // Deal initial hands to player and dealer
  playerHand.push(await drawCard());
  dealerHand.push(await drawCard());
  playerHand.push(await drawCard());
  dealerHand.push(await drawCard());

  //update playerHandValues and dealerHandValues
  playerHandValue = playerHand.reduce((sum, card) => sum + card.value, 0);
  dealerHandValue = dealerHand.reduce((sum, card) => sum + card.value, 0);

  // Show player's initial hand
  console.log("Your hand: " + playerHand.map((card) => card.name).join(", "));
  playerTotal = playerHandValue;
  console.log("Your total: " + playerHandValue + "\n");

  // Show one of the dealer's cards face up
  dealerUp.push(dealerHand[1]);
  console.log("Dealer's face up card: " + dealerUp[0].name + " of " + dealerUp[0].suit + "\n");

  // Player's turn
  while (playerTotal < 21 && playerHand.length < 5) {
    console.log("\nYou choose to hit.");
    await delay(2);
    playerHand.push(await drawCard());
    console.log("Your hand: " + playerHand.map((card) => card.name).join(", "));
    playerTotal = playerHand.reduce((sum, card) => sum + card.value, 0);
    console.log("Your total: " + playerTotal);
    if (playerTotal > 21) {
      playerBust = true;
      console.log("\n Player busts! You went over 21.");
      break;
    }
  }

}
