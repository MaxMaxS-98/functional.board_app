const Deck = require('deck-of-cards');
const deck = new Deck();

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
var playerBlackjack = false;
var dealerBlackjack = false;
var gameCount = 0;

async function drawCard() {
  const card = await deck.draw();
  return card;
}

async function startGame() {
  console.log("Starting a new game of Blackjack...\n");

  // Deduct player's bet from bank
  playerBank -= playerBet;
  console.log("You bet " + playerBet + ".");
  console.log("Your bank is now " + playerBank + ".\n");

  // Deal initial hands to player and dealer
  playerHand.push(await drawCard());
  dealerHand.push(await drawCard());
  playerHand.push(await drawCard());
  dealerHand.push(await drawCard());

  // Show player's initial hand
  console.log(
    "Your hand: " +
      playerHand.map((card) => card.value + " of " + card.suit).join(", ")
  );
  playerTotal = playerHand.reduce((total, card) => {
    return total + card.value;
  }, 0);
  console.log("Your total: " + playerTotal + "\n");

  // Show one of the dealer's cards face up
  dealerUp.push(dealerHand[1]);
  console.log(
    "Dealer's face up card: " + dealerUp[0].value + " of " + dealerUp[0].suit
  );
  console.log("\n");

  // Check for player blackjack
  if (playerTotal === 21) {
    playerBlackjack = true;
    console.log("Blackjack! You win!");
    playerBank += 1.5 * playerBet;
    console.log("You won $" + 1.5 * playerBet + ". Your remaining bank is $" + playerBank + ".");
    return;
  }

  // Player's turn
  while (playerTotal < 21 && playerHand.length < 5) {
    playerHand.push(await drawCard());
    console.log(
      "You choose to hit. Your hand: " +
        playerHand.map((card) => card.value + " of " + card.suit).join(", ")
    );
    playerTotal = playerHand.reduce((total, card) => {
      return total + card.value;
    }, 0);
    console.log("Your total: " + playerTotal + "\n");
    if (playerTotal > 21) {
      playerBust = true;
      console.log("BUST! You went over 21.");
      break;
    }
  }

  // Check if player busts
if (playerBust) {
    console.log("\nYou lost $" + playerBet + ". Your remaining bank is $" + playerBank + ".");
    return;
    }
    
    // Show dealer's second card face up
    console.log("\nDealer's hand: " + dealerUp.concat(dealerDown).join(", "));
    dealerTotal = playerHand[0].value + playerHand[1].value;
    console.log("Dealer's total: " + dealerTotal + "\n");
    
    // Dealer's turn
    while (dealerTotal < 17) {
    console.log("Dealer hits.");
    await delay(2);
    dealerHand.push(await drawCard());
    console.log("Dealer's hand: " + dealerHand.map(card => card.name).join(", "));
    dealerTotal = dealerHand.reduce((acc, card) => acc + card.value, 0);
    console.log("Dealer's total: " + dealerTotal);
    if (dealerTotal > 21) {
    dealerBust = true;
    console.log("\nDealer busts! You win.");
    playerBank += 2 * playerBet;
    console.log("You won $" + 2 * playerBet + ". Your remaining bank is $" + playerBank + ".");
    return;
    }
    }
    
    // Compare player and dealer totals
    console.log("\nFinal results:");
    console.log("Your total: " + playerTotal);
    console.log("Dealer's total: " + dealerTotal);
    if (playerTotal > dealerTotal) {
    console.log("\nYou win!");
    playerBank += 2 * playerBet;
    console.log("You won $" + 2 * playerBet + ". Your remaining bank is $" + playerBank + ".");
    } else if (playerTotal < dealerTotal) {
    console.log("\nYou lose.");
    console.log("You lost $" + playerBet + ". Your remaining bank is $" + playerBank + ".");
    } else {
    console.log("\nIt's a push.");
    playerBank += playerBet;
    console.log("You won back $" + playerBet + ". Your remaining bank is $" + playerBank + ".");
    }
    }
    
    // Call the blackjack function to start the game
    startGame();
