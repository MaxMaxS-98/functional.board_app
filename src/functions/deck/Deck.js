const path = require("path");
const fs = require("fs");

let activeShoe;

try {
  activeShoe = require(path.join(__dirname, "../../db/activeShoe.json"));
} catch (err) {
  // console.error(err);
  
}

class Deck {
  constructor() {
    this.shoe = activeShoe;
    this.usedShoe = [];
  }

  async drawCard() {
    const length = this.shoe.cards.length;
    const r = Math.floor(Math.random() * length);
    const cardSelected = this.shoe.cards[r];
    this.shoe.cards.splice(r, 1);
    this.usedShoe.push(cardSelected);
    fs.writeFile(path.join(__dirname, "../../db/activeShoe.json"),
      JSON.stringify(this.shoe),
      (err) => {
        if (err) {
         
          return;
        }
        // console.log("Shoe updated");
      }
    );
    
    return cardSelected;
  }


}

module.exports = Deck;
