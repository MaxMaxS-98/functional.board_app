const fs = require('fs');
const path = require('path');
const Deck = require('../helpers/deck');
const url = `https://blackjack-blitz-test.herokuapp.com`

const buildDeck = async () => {
  const deck = await new Deck();

  const response = await fetch(`localhost:3001/api/table/1`, {
    method: 'PUT',
    body: JSON.stringify(deck),
    headers: { 'Content-Type': 'application/json' }
  })
  if (response.ok) {
    console.log(deck)
  } else {
    console.log(`something is wrong`);
  }
}
  
  buildDeck();
module.exports = { buildDeck } ;
