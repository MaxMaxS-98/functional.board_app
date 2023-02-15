const fs = require("fs");
const path = require("path");

const renderDeck = () => {
  // Read the JSON file that was created by buildDeck.js
  const filePath = path.join(__dirname, "../db/activeShoe.json");
  const deckData = fs.readFileSync(filePath);
  const deck = JSON.parse(deckData);

  // Compile the Handlebars template
  const source = document.getElementById("card-template").innerHTML;
  const template = Handlebars.compile(source);

  // Render the cards using the Handlebars template
  const html = template({ cards: deck.cards });
  document.body.innerHTML += html;
};

renderDeck();
module.exports = renderDeck;
