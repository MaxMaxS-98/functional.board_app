const path = require('path');

class Draw {
    constructor() {
      this.shoe = require(path.join(__dirname, "../../db/activeShoe.json"));
    }
  
    async drawCard() {
      const length = this.shoe.cards.length;
      const r = Math.floor(Math.random() * length);
      const cardSelected = await this.shoe.cards[r];
      this.shoe.cards.splice(r, 1);
  
      return cardSelected;
    }

    handValue(hand) {
        let total = 0;
        for (let card of hand) {
            total += card.value;
        }
        return total;
    }
  }

  module.exports = Draw;
