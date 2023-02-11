const path = require('path');
// const deckOfCards = require(path.join(__dirname, "../../db/activeShoe.json"));
class Deck {
    constructor() {
      this.shoe = require(path.join(__dirname, "../../db/activeShoe.json"));
      // this.shoe = deckOfCards
      // this.usedShoe = []
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

  module.exports = Deck;
