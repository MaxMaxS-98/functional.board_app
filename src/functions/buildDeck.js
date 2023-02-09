const fs = require('fs');
const path = require('path');
const Deck = require('../helpers/deck');

const buildDeck = () => {
    const activeShoe = new Deck();
    const filePath = path.join(__dirname, '../db/activeShoe.json');
    fs.writeFileSync(filePath, JSON.stringify(activeShoe));
  };
  
  buildDeck();
module.exports = buildDeck;
