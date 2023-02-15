const path = require("path");
const fs = require("fs");
const deckData = fs.readFileSync(path.join(__dirname, "../db/activeShoe.json"));
const sleep = require("sleep-promise");
const handValue = require(path.join(__dirname, "../helpers/handValue"));
// const { checkDealerBlackjack }= require(path.join(__dirname, "./checkFunctions"));
Handlebars.registerPartial('player-hand-template', $('#player-hand-template').html());
// variables
// Compile the hand-details-template
var handDetailsTemplate = Handlebars.compile($('#hand-details-template').html());

// Define the data context
var data = {
  players: [
    { id: 'c1', playerName: 'player 1', cssClass: 'first', cards: ['2C', '3C', '4C'] },
  //   { id: 'c2', playerName: 'player 2', cssClass: 'second', cards: ['5C', '6C', '7C'] },
  //   { id: 'c3', playerName: 'player 3', cssClass: 'third', cards: ['8C', '9C', '10C'] },
  //   { id: 'c4', playerName: 'player 4', cssClass: 'fourth', cards: ['JC', 'QC', 'KC'] },
  //   { id: 'c5', playerName: 'player 5', cssClass: 'fifth', cards: ['AC', 'AD', 'AH', 'AS'] }
  ]
};

// Render the template with the data context
var html = handDetailsTemplate(data);

// Insert the rendered HTML into the DOM
$('#game-container').html(html);

const Deck = require(path.join(__dirname, "./deck/Deck"));
var deckQueue = [];

// var dealerDown = (dealerHand[0].facedown, true)
// var dealerUp = (dealerHand[1].facedown, false)
var playerBet = 25; // call from html
var dealerTotal = 0;
var playerBank = 1000; // call from database
var playerBust = null;
var dealerBust = null;
var dealerStand = null;
var gameCount = 0;
var turn = 0; // 0 = player 1, 1 = player 2, 2 = player 3, 3 = player 4, 4 = player 5, 5 = dealer
var playerOneBot = [];
var playerTwoBot = [];
var playerHand = []; //holds player card objects
var playerFourBot = [];
var playerFiveBot = [];
var dealerHand = [];
var playerHandValue = handValue(playerHand); // holds the value of the player's hand
var dealerHandValue = handValue(dealerHand); // holds the value of the dealer's hand
var usedCards = []; // holds cards that have been used

// functions
async function drawCards() {
  const deck = new Deck();
  return new Promise(async (resolve, reject) => {
    while (deckQueue.length < 20 && deck.shoe.cards.length > 0) {
      const card = await deck.drawCard();
      deckQueue.push(card);
      console.log(deckQueue.length);
      sleep(500);
    }
    resolve();
  });
}

async function dealTable() {
  await drawCards();

  await playerHand.push(deckQueue.pop());
  await playerOneBot.push(deckQueue.pop());
  await playerTwoBot.push(deckQueue.pop());
  await dealerHand.push(deckQueue.pop());
  await playerFourBot.push(deckQueue.pop());
  await playerFiveBot.push(deckQueue.pop());
  await playerHand.push(deckQueue.pop());
  await playerOneBot.push(deckQueue.pop());
  await playerTwoBot.push(deckQueue.pop());
  await dealerHand.push(deckQueue.pop());
  await playerFourBot.push(deckQueue.pop());
  await playerFiveBot.push(deckQueue.pop());

  dealerHand[0].facedown = true;
  console.log(dealerHand);
  console.log(playerHandValue);
  dealerHand[1].facedown = false;
  console.log(dealerHand);
  if (turn > 5) {
    turn = 0;
  }
  await sleep(1000);
}
console.log(deckQueue.length);

function checkDealerHand() {
  if (dealerHand[1].value === 1) {
    if (dealerHand[0].value === 10) {
      console.log("Dealer has blackjack!");
    }
  } else if (dealerHandValue[1].value === 10) {
    if (dealerHandValue[0].value === 1) {
      console.log("Dealer has blackjack!");
    }
  }
}
dealTable();
function checkTableForBlackjack() {
  var usedCards = [];
  if (handValue(playerHand) === 21) {
    console.log("Player has Blackjack!");
    playerBank += playerBet * 1.5;
    usedCards.push(...playerHand);
    playerHand = [];
  }
  if (handValue(playerOneBot) === 21) {
    console.log("Player One Bot has Blackjack!");
    usedCards.push(...playerOneBot);
    playerOneBot = [];
  }
  if (handValue(playerTwoBot) === 21) {
    console.log("Player Two Bot has Blackjack!");
    usedCards.push(...playerTwoBot);
    playerTwoBot = [];
  }
  if (handValue(playerFourBot) === 21) {
    console.log("Player Four Bot has Blackjack!");
    usedCards.push(...playerFourBot);
    playerFourBot = [];
  }
  if (handValue(playerFiveBot) === 21) {
    console.log("Player Five Bot has Blackjack!");
    usedCards.push(...playerFiveBot);
    playerFiveBot = [];
  }
}

const startGame = () => {
  drawCards();
  dealTable();
};
startGame();
