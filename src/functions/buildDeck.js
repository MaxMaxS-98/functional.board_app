// const fs = require('fs');
// const path = require('path');
const Deck = require('../helpers/deck');
const url = `https://blackjack-blitz-test.herokuapp.com`
const local = `https://localhost:3001`

const buildDeck = async () => {
  const deckObj = await new Deck();
  const jsonOpts = JSON.stringify(deckObj.opts);
  const jsonCards = JSON.stringify(deckObj.cards, null, 2);
  console.log(jsonOpts, jsonCards)
  const response = await fetch(`${url}/api/table/1`, {
    method: 'PUT',
    body: {
      opts: jsonOpts,
      cards: jsonCards
    },
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.ok) {
    const responseData = await response.json();
    console.log(responseData);
  } else {
    console.log(`Something is wrong: ${response.status}, ${response.statusText}`);
  }
}

buildDeck();
module.exports = { buildDeck };
