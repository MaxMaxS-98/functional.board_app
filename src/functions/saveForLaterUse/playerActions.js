function playerDraw() {
  var playerHand = [];
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
  
  function playerBust() {
    console.log("The player has bust! The dealer wins.");
    playerBust = true;
  }
  
  function playerBet(amount) {
    if (amount <= playerBank) {
      playerBank = playerBank - amount;
      console.log("The player has placed a bet of " + amount + ".");
      console.log("The player's bank is now " + playerBank + ".");
    } else {
      console.log("The player does not have enough funds to place this bet.");
    }
  }
  
  function playerWin() {
    playerBank = playerBank + 2 * playerBet;
    console.log(
      "The player has won the hand! The player's bank is now " + playerBank + "."
    );
  }
  
  module.exports = 
    playerDraw,
    playerHit,
    playerStand,
    playerBust,
    playerBet,
    playerWin,
    playerHand //** */
  

  //************ */