
//wrapped in a function to be called by server.js
//files and dependencies
const path = require("path");
const sleep = require("sleep-promise");
const Deck = require(path.join(__dirname, "../helpers/deck"));
const { resetVariables } = require(path.join(__dirname, "./actions.js"));
const { checkDealerBlackjack } = require(path.join(__dirname, "./checkFunctions"));

// (a)  variables
// (a1) html references
// var hDealerStand = null;
// var hDealerHandValue = 0
// var hDealerHand = [];
// var hPlayerStand = null;
// var hPlayerHandValue = 0
// var hPlayerHand = [];
// var hPlayerOptions = null;
// var hDealerDown = []; // dealer's down card
// var hDealerUp = []; // dealer's up card
// var hPlayerBank = null;
// var hPlayerBet = null;

// (a2) game variables
let deck = []; // deck pulled from db
var dealerHand = []; // dealer's hand
var playerHand = []; // player's hand
var dealerHandValue = 0; // dealer's hand value
var playerHandValue = 0; // player's hand value
var safety = 17; // dealer will stand on this value
var playerBet = 25;
// var playerTotal = 0;
// var dealerTotal = 0;
var playerBank = 1000; // stored in Player Model
var playerBust = null;
var dealerBust = null;
var gameCount = 0;
var turn = 0; // 0 = player, 1 = dealer

// (b) initialize game (client side html) client.js

async function drawCard() {
  const draw = new Deck();
  let count = 0;
  const maxDeckSize = 52;
  do {
    if (deck.length >= maxDeckSize) {
      break;
    }
    const card = await draw.drawCard();
    deck.push(card);
    count++;
  } while (count < 10);
}
console.log(deck);

// (c) start game
async function startGame() {
  // (c1) reset totals, hands, deck, turn TODO: html
  if (gameCount > 0) {
  resetVariables();
  }
  // (c2) reshuffle if needed if shoe is low TODO: add reshuffle logic
  // (c3) deal cards
  console.log("Starting a new game of Blackjack...\n");

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");
  await sleep(1000);
  console.log("Your credits are now " + playerBank + ".\n");
  await sleep(1000);
  // Deal initial hands to player from deck
  drawCard
  turn = 0; playerHand.push(deck.pop()); console.log("You have been dealt a card.\n"); await sleep(1000);
  turn++; dealerHand.push(deck.pop()), console.log("Dealer has been dealt a card.\n"), await sleep(1000);
  turn = 0; playerHand.push(deck.pop()); console.log("You have been dealt a card.\n"); await sleep(1000);
  turn++; dealerHand.push(deck.pop()), console.log("Dealer has been dealt a card.\n"), await sleep(1000);
  console.log(deck);

  // Show player's initial hand
  console.log("Your hand: " + playerHand.map((card) => card.name).join(", "));
  playerTotal = playerHand.reduce((sum, card) => sum + card.value, 0);
  console.log("Your total: " + playerHandValue + "\n");
  await sleep(1000);
  //update playerHandValues and dealerHandValues
  playerHandValue = playerHandValue[0] + playerHandValue[1];
  dealerHandValue = dealerHandValue[0] + dealerHandValue[1];

  // Show one of the dealer's cards face up
  // dealerUp.push(dealerHand[1]);
  // console.log(dealerHand[1].name + "-----test-----");
  console.log(
    "Dealer's face up card: " +
      dealerHand[1].name +
      " of " +
      dealerHand[1].suit +
      "\n"
  );
  // check if the dealer has a blackjack when dealerUp value is 10 or ace
checkDealerBlackjack();


  
  // check for player blackjack
  if (playerHandValue === 21 && playerHand.length === 2) {
    console.log("Blackjack! You win!");
    playerBank += 1.5 * playerBet;
    console.log(
      "You won $" +
        1.5 * playerBet +
        ". Your remaining bank is $" +
        playerBank +
        "."
    );
    //empty all arrays
    playerHand.length = 0;
    dealerHand.length = 0;
    dealerDown.length = 0;
    dealerUp.length = 0;
  } else {



  // Player's turn hit until 17 or bust
  while (playerTotal < 17) {
    console.log(playerHand.length + "-----test-----");
    console.log("\nYou choose to hit.");
    await delay(2);
    await playerHand.push(await drawCard());
    console.log("Your hand: " + playerHand.map((card) => card.name).join(", "));
    playerTotal = playerHand.reduce((sum, card) => sum + card.value, 0);
    console.log("Your total: " + playerTotal);
    if (playerTotal > 21) {
      playerBust = true;
      console.log("\n Player busts! You went over 21.");
      //log playerBalance
      console.log(playerBank + "-----test-----");
      //empty all arrays
      resetVariables();
  
    }
  }

  // Check if player busts
  if (playerBust) {
    console.log(
      "\nYou lost $" +
        playerBet +
        ". Your remaining bank is $" +
        playerBank +
        "."
    );
   resetVariables();
  }
  // Show dealer's second card face up
  console.log("\nDealer's face up card: " + dealerUp.name);

  console.log("\nDealer's hand: " + dealerUp.concat(dealerDown).join(", "));

  dealerTotal = draw.handValue(dealerHand);

  console.log("Dealer's total: " + dealerTotal + "\n");

  // Dealer's turn
  while (dealerTotal < 17) {
    console.log("Dealer hits.");

    dealerHand.push(await draw.drawCard());
    console.log("Dealer's hand: " + dealerHand.map(card => card.name).join(", "));


    dealerTotal = draw.handValue(dealerHand);
    console.log("Dealer's total: " + dealerTotal);

    if (dealerTotal > 21) {
      dealerBust = true;
      console.log("\nDealer busts! You win.");

      playerBank += 2 * playerBet;
      console.log(
        "You won $" +
          2 * playerBet +
          ". Your remaining bank is $" +
          playerBank +
          "."
      );

      //empty all arrays
      resetVariables();
    }
  }

  // Compare player and dealer totals
  console.log("\nFinal results:");
  console.log("Your total: " + playerTotal);
  console.log("Dealer's total: " + dealerTotal);
  if (playerTotal > dealerTotal) {
    console.log("\nYou win!");
    playerBank += 2 * playerBet;
    console.log(
      "You won $" +
        2 * playerBet +
        ". Your remaining bank is $" +
        playerBank +
        "."
    );
    //empty all arrays
    resetVariables();
  } else if (playerTotal < dealerTotal) {
    console.log("\nYou lose.");
    console.log(
      "You lost $" + playerBet + ". Your remaining bank is $" + playerBank + "."
    );
    //empty all arrays
    resetVariables();
  } else {
    console.log("\nPush.");
    playerBank += playerBet;
    console.log(
      "You won $" + playerBet + ". Your remaining bank is $" + playerBank + "."
    );
    //empty all arrays
  }
}
for (let i = 1; i < 3; i++) {
  
  
  gameCount++;
  console.log("---test---" + gameCount + "---test---");


}
}
startGame();

module.exports = {
  startGame,
  playerHand,
  dealerHand,
  playerHandValue,
  dealerHandValue,
  playerBank,
  playerBet,
  playerBust,
  dealerBust,
  gameCount,
  resetVariables,
  checkDealerBlackjack,
  sleep,
  drawCard,
};
