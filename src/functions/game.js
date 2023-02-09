const fs = require("fs");
const path = require("path");
const deck = require("./buildDeck");

const startGame = async () => {
  var activePlayers = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/activePlayers.json"))
  );
  console.log(activePlayers);
  var numPlayers = Object.keys(activePlayers).length;
  console.log(numPlayers);

  let shoe = require("../db/activeShoe.json");
  console.log(shoe);
  let deckLength = deck.length;
  console.log(deckLength);

  var players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push("Player" + (i + 1));
  }
  console.log(players);
  let dealerHand = [];
  let playerHand = [];

  console.log("Starting a new game...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Dealing cards...");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Deal cards to players
  for (let i = 0; i < numPlayers; i++) {
  
    var indexToRemove = Math.floor(Math.random() * deckLength);
    shoe.splice(indexToRemove, 1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(
      `${players[i]} was dealt a ${shoe[i].name} of ${shoe[i].suit}. Value: ${shoe[i].value}.`
    );
    playerHand.push(shoe[i]);
  }

  dealerHand.push(deck.pop());
  let faceDownCard = dealerHand[0].value;
  let faceDownSuit = dealerHand[0].suit;
  let faceDownName = dealerHand[0].name;

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Dealer was dealt a face down card.");

  for (let i = 0; i < numPlayers; i++) {
    players[i].push(deck.pop());
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(
      `${players[i]} was dealt a ${players[i][0].name} of ${players[i][0].suit}. Value: ${players[i][0].value}.`
    );
  }

  dealerHand.push(deck.pop());
  let faceUpCard = dealerHand[1].value;
  let faceUpSuit = dealerHand[1].suit;
  let faceUpName = dealerHand[1].name;

  console.log(`Dealer's up card is ${faceUpName} of ${faceUpSuit}.`);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Checking for dealer blackjack...");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  if (faceDownCard + faceUpCard === 21) {
    console.log("Dealer has blackjack!");
    // end the game, push all arrays to usedShoe.json
    fs.writeFileSync(
      path.join(__dirname, "../db/usedShoe.json"),
      JSON.stringify(players)
    );
    console.log("Game over!");
    process.exit();
  } else {
    console.log("Dealer has no blackjack!");
    // write instructions here
  }
};

startGame();
