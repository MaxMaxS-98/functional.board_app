const path = require("path");
const fs = require("fs");
const deckData = fs.readFileSync(path.join(__dirname, "../db/activeShoe.json"));
const sleep = require("sleep-promise");
const Deck = require(path.join(__dirname, "./deck/Deck"));
const handValue = require(path.join(__dirname, "../helpers/handValue"));
// const { checkDealerBlackjack }= require(path.join(__dirname, "./checkFunctions"));
// variables

const deck = JSON.parse(deckData);
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
function drawCards() {
  while (deckQueue.length < 20 && deck.length > 0) {
    deckQueue.push(deck.pop());
  }
}

async function dealTable() {
  drawCards();
  for (let i = 0; i < 2; i++) {
    playerHand.push(deckQueue.pop());
    dealerHand.push(deckQueue.pop());
    playerOneBot.push(deckQueue.pop());
    playerTwoBot.push(deckQueue.pop());
    playerFourBot.push(deckQueue.pop());
    playerFiveBot.push(deckQueue.pop());
  }
  dealerHand[0].facedown = true;
  dealerHand[1].facedown = false;
  turn++;
  if (turn > 5) {
    turn = 0;
  }
  await sleep(1000);
}

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
  }
  