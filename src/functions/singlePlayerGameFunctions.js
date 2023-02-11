const path = require("path");
const Draw = require(path.join(__dirname, "../helpers/class/draw"));
const draw = new Draw();

const delay = require(path.join(__dirname, "../helpers/delayScript"));

var playerHand = [];
var dealerHand = [];
var dealerDown = [];
var dealerUp = [];
var playerBet = 25;
var playerTotal = 0;
var dealerTotal = 0;
var playerBank = 1000;
var playerBust = false;
var dealerBust = false;
var dealerStand = false;
var gameCount = 0;

async function drawCard() {
  const card = await draw.drawCard();
  console.log(card.name, card.suit, card.value);
  setTimeout(() => {}, 2000);
  return card;
  
}

async function startGame() {
  console.log("Starting a new game of Blackjack...\n");

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");
  setTimeout(() => {}, 2000);
  console.log("Your bank is now " + playerBank + ".\n");
  setTimeout(() => {}, 2000);

  // Deal initial hands to player and dealer
  playerHand.push(await drawCard());
  setTimeout(() => {}, 2000);
  dealerHand.push(await drawCard());
  setTimeout(() => {}, 2000);
  playerHand.push(await drawCard());
  setTimeout(() => {}, 2000);
  dealerHand.push(await drawCard());

  // Show player's initial hand
  console.log(
    "Your hand: " +
      playerHand.map((card) => card.name).join(", ") 
 
  );
  playerTotal = playerHand.reduce((sum, card) => sum + card.value, 0);
  console.log("Your total: " + playerTotal + "\n");

  // Show one of the dealer's cards face up
  dealerUp.push(dealerHand[1]);
  // console.log(dealerHand[1].name + "-----test-----");
  console.log(
    "Dealer's face up card: " +
      dealerUp[0].name +
      " of " +
      dealerUp[0].suit +
      "\n"
  );

  // Player's turn
  while (playerTotal < 21 && playerHand.length < 5) {
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
      //empty all arrays
      playerHand.length = 0;
      dealerHand.length = 0;
      dealerDown.length = 0;
      dealerUp.length = 0;
      break;
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
    //empty all arrays
    playerHand.length = 0;
    dealerHand.length = 0;
    dealerDown.length = 0;
    dealerUp.length = 0;
  }
  // Show dealer's second card face up
  console.log("\nDealer's face up card: " + dealerUp.name);
  setTimeout(() => {}, 2000);
  console.log("\nDealer's hand: " + dealerUp.concat(dealerDown).join(", "));
  setTimeout(() => {}, 2000);
  dealerTotal = draw.handValue(dealerHand);
  setTimeout(() => {}, 2000);
  console.log("Dealer's total: " + dealerTotal + "\n");
  setTimeout(() => {}, 2000);

  // Dealer's turn
  while (dealerTotal < 17) {
    console.log("Dealer hits.");
    setTimeout(() => {}, 2000);
    dealerHand.push(await draw.drawCard());
    console.log("Dealer's hand: " + dealerHand[0]);
    setTimeout(() => {}, 2000);
    dealerTotal = draw.handValue(dealerHand);
    console.log("Dealer's total: " + dealerTotal);
    setTimeout(() => {}, 2000);
    if (dealerTotal > 21) {
      dealerBust = true;
      console.log("\nDealer busts! You win.");
      setTimeout(() => {}, 2000);
      playerBank += 2 * playerBet;
      console.log(
        "You won $" +
          2 * playerBet +
          ". Your remaining bank is $" +
          playerBank +
          "."
      );
      setTimeout(() => {}, 2000);
      //empty all arrays
      playerHand.length = 0;
      dealerHand.length = 0;
      dealerDown.length = 0;
      dealerUp.length = 0;
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
    playerHand.length = 0;
    dealerHand.length = 0;
    dealerDown.length = 0;
    dealerUp.length = 0;
  } else if (playerTotal < dealerTotal) {
    console.log("\nYou lose.");
    console.log(
      "You lost $" + playerBet + ". Your remaining bank is $" + playerBank + "."
    );
    //empty all arrays
    playerHand.length = 0;
    dealerHand.length = 0;
    dealerDown.length = 0;
    dealerUp.length = 0;
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



  startGame();
  console.log("---test---");
  gameCount++;
  console.log("test " + gameCount + " complete");
  console.log("---test---");
  setTimeout(() => {}, 2000);
    // empty all arrays
 playerHand = [];
 dealerHand = [];
 dealerDown = [];
 dealerUp = [];
 playerHand.length = 0;
 dealerHand.length = 0;
 dealerDown.length = 0;
 dealerUp.length = 0;
}
