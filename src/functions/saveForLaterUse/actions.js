//  actions.js

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

module.exports = {
  playerHit,
  playerStand,
  dealerStand,
};
