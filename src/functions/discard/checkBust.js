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
  