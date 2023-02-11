const path = require("path");
const fs = require("fs");
const activeShoe = require(path.join(__dirname, "../../db/activeShoe.json"));

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
    fs.writeFile(
      path.join(__dirname, "../../db/activeShoe.json"),
      JSON.stringify(this.shoe),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Shoe updated");
      }
    );
    
    return cardSelected;
    
  }

  handValue(hand) {
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
  
  }
  
  
  module.exports = Deck;


