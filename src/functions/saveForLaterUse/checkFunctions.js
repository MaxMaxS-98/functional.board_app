const path = require("path");
const { startGame, playerTotal, dealerTotal, dealerUp, dealerHand, playerBust, dealerBust, playerBlackjack, dealerStand, playerDraw, dealerDraw } = require(path.join(__dirname, "../singlePlayerGameFunctions"));

function checkBust() {
  if (playerTotal > 21) {
    console.log("The player has bust! The dealer wins.");
    playerBust = true;
  }
  if (dealerTotal > 21) {
    console.log("The dealer has bust! The player wins.");
    dealerBust = true;
  }
}

function checkBlackjack(playerTotal) {
  if (playerTotal === 21) {
    console.log("The player has blackjack! The player wins.");
    console.log("Game over!");
    playerBlackjack = true;
  }
}

function checkPush() {
  if (playerTotal === 21 && dealerTotal === 21) {
    console.log("The game is a push.");
  }
}

function checkDealerDown() {
  if (dealerTotal <= 16) {
    dealerDraw();
    checkBust();
  }
}

function checkDealerUp() {
  if (dealerTotal >= 17) {
    dealerStand = true;
  }
}

function playerHit() {
  console.log("The player has chosen to hit.");
  playerDraw();
  checkBust();
}

function playerStand() {
  console.log("The player has chosen to stand.");
  checkDealerDown();
  checkDealerUp();
}

function checkDealerBlackjack(dealerUp) {
  // Check if dealer has a blackjack when up card is a 10 value card
  if (dealerUp[1].value === 10) {
    if (dealerHand[0].value === 11) {
      dealerBlackjack = true;
      console.log("The dealer has blackjack! The dealer wins.");
      startGame();
      return dealerBlackjack;
    }
  }

  // Check if dealer has a blackjack when up card is an ace
  if (dealerUp[1].value === 11) {
    if (dealerHand[0].value === 10) {
      dealerBlackjack = true;
      console.log("The dealer has blackjack! The dealer wins.");
      startGame();
      return dealerBlackjack;
    }
  }
}

module.exports = {
  checkBust,
  checkPush,
  checkDealerDown,
  checkDealerUp,
  playerHit,
  playerStand,
  checkBlackjack,
  checkDealerBlackjack,

};
