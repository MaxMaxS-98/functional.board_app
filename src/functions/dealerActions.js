const Draw = require('../helpers/class/draw');
const draw = new Draw();

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
  

  
  function dealerStand() {
    console.log("The dealer stands on " + dealerTotal);
  }

  module.exports = {
    playerHand,
    dealerHand,
    playerTotal,
    dealerTotal,
    dealerStand,
    checkDealerDown,
    checkDealerUp,
  };
  // ****