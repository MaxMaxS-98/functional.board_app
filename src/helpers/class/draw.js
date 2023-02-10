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
      console.log(cardSelected.name, cardSelected.suit, cardSelected.value);
      console.log(cardSelected);
  
      return cardSelected;
    }
  }
  
  
  module.exports = Draw;
  