const path = require("path");
const sleep = require("sleep-promise");
const Deck = require(path.join(__dirname, "../helpers/class/Deck"));
const draw = new Deck();
const reset = require(path.join(__dirname, "../helpers/resetVariables"));
const delay = require(path.join(__dirname, "../helpers/delayScript"));
const { checkDealerBlackjack, checkPlayerBlackjack }= require(path.join(__dirname, "./checkFunctions"));
var playerHand = [];
var dealerHand = [];
var dealerDown = [];
var playerHandValue = 0; 
var dealerHandValue = 0; 
var playerBet = 25;
var playerBank = 1000;
var playerBust = false;
var dealerBust = false;
var gameCount = 0;
var turn = 0;

async function drawCard() {
  const card = await draw.drawCard();
  
  console.log(card.name, card.suit, card.value);
  await sleep(1000);
  return card;
}

async function startGame() {
  console.log("Starting a new game of Blackjack...\n");

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");
  await sleep(1000);
  console.log("Your credits are now " + playerBank + ".\n");
  await sleep(1000);
  // Deal initial hands to player and dealer
  playerHand.push(await drawCard()); + console.log("You have been dealt a card.\n");
  
  await sleep(1000);
  dealerHand.push(await drawCard()); + console.log("Dealer has been dealt a card.\n");
  await sleep(1000);
  playerHand.push(await drawCard()); + console.log("You have been dealt a card.\n");
  await sleep(1000);
  dealerHand.push(await drawCard()); + console.log("Dealer has been dealt a card.\n");
  await sleep(1000);
  //update playerHandValues and dealerHandValues
  playerHandValue = playerHand.reduce((sum, card) => sum + card.value, 0);
  dealerHandValue = dealerHand.reduce((sum, card) => sum + card.value, 0);

  // Show player's initial hand
  console.log("Your hand: " + playerHand.map((card) => card.name).join(", "));
  playerHandValue = playerHand.reduce((sum, card) => sum + card.value, 0);
  console.log("Your total: " + playerHandValue + "\n");

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
await checkDealerBlackjack();
await checkPlayerBlackjack();



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
      reset();
  
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
   reset();
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
      reset();
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
    reset();
  } else if (playerTotal < dealerTotal) {
    console.log("\nYou lose.");
    console.log(
      "You lost $" + playerBet + ". Your remaining bank is $" + playerBank + "."
    );
    //empty all arrays
    reset();
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

// reset
}

startGame();

// module.exports = {
//   startGame,
//   playerHand,
//   dealerHand,
//   playerHandValue,
//   dealerHandValue,
//   playerBank,
//   playerBet,
//   playerTotal,
//   dealerTotal,
//   playerBust,
//   dealerBust,
//   dealerUp,
//   dealerDown,
//   gameCount,
//   reset,
//   checkDealerBlackjack,
//   sleep,
//   delay,
//   drawCard,
// };
 