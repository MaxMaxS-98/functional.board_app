function handValue(hand) {
    let total = 0;
    let aceCount = 0;

    for (let card of hand) {
      if (card.name === "Ace") {
        aceCount++;
      } else {
        total += card.value;
      }
    }

    for (let i = 0; i < aceCount; i++) {
      if (total + 11 <= 21) {
        total += 11;
      } else {
        total += 1;
      }
    }

    return total;
  }

  module.exports = handValue;