const path = require("path");
const Draw = require(path.join(__dirname, "../helpers/class/draw"));
const draw = new Draw();

function playerDraw() {
  draw
    .drawCard()
    .then((cardSelected) => {
      // adds card to playerHand array
      playerHand.push(cardSelected);
      // logs the card to the console
      console.log(
        "The player has dealt a " +
          cardSelected.name +
          " of " +
          cardSelected.suit
      );
      // adds card to playerTotal
      playerTotal = playerTotal + cardSelected.value;
      // logs the playerTotal to the console
      console.log("The player's total is now " + playerTotal);
    })
    .catch((error) => {
      console.error("An error occurred while drawing a card: ", error);
    });
}

function dealerDraw() {
  draw
    .drawCard()
    .then((cardSelected) => {
      // adds card to playerHand array
      dealerHand.push(cardSelected);
      // logs the card to the console
      console.log(
        "The dealer has dealt a " +
          cardSelected.name +
          " of " +
          cardSelected.suit
      );
      // adds card to playerTotal
      dealerTotal = dealerTotal + cardSelected.value;
      // logs the playerTotal to the console
      console.log("The dealer's total is now " + dealerTotal);
    })
    .catch((error) => {
      console.error("An error occurred while drawing a card: ", error);
    });
}

module.exports = {
  playerDraw,
  dealerDraw
};
