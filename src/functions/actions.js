//  actions.js

const { playerHandValue } = require("./singlePlayerGameFunctions");

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

function dealerStand() {
  console.log("The dealer has chosen to stand.");
}

function resetVariables() {
  var playerTotal = 0;
  var dealerTotal = 0;
  var playerHandValue = 0;
  var dealerHandValue = 0;
  var playerHand = [];
  var dealerHand = [];
  var turn = 0;// 0 = player, 1 = dealer

  // playerBet = 0;
  // playerBank = 1000;
  // gameCount = 0;

}

module.exports = {
  playerHit,
  playerStand,
  dealerStand,
  resetVariables,
};
