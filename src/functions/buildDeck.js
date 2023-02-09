const fs = require('fs');
const path = require('path');
const Deck = require('../helpers/deck');

const buildDeck = () => {
    const deck = new Deck();
    const activeShoe = deck.createDeck();
    deck.shuffle();
    const filePath = path.join(__dirname, 'activeShoe.json');
    fs.writeFileSync(filePath, JSON.stringify(activeShoe));
  };
  
  buildDeck();
module.exports = buildDeck;
