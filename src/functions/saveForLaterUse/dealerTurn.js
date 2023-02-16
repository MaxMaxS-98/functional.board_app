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
  
  function dealerStand() {
    console.log("The dealer has chosen to stand.");
  }
  
  function dealerBust() {
    console.log("The dealer has bust! The player wins.");
    dealerBust = true;
  }
  
  module.exports = {
  
    checkDealerDown: checkDealerDown,
    checkDealerUp: checkDealerUp,
    dealerStand: dealerStand,
    dealerBust: dealerBust
  };