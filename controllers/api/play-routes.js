const router = require('express').Router();
const initBalance = 1000;
const initBet = 15;
var currentBet = initBet;
var currentBalance = initBalance;
let playerHand = [];
let dealerHand = [];
var deck = new Deck();

router.get('/start', async (req, res) => {
  try {
    // start new game
    updateBalance();
    // clear the previous game state
    deck = new Deck();
    deck.flip();
    deck.shuffle();

    playerHand = [];
    dealerHand = [];
    drawCard(deck, playerHand, 2);
    drawCard(deck, dealerHand, 2);

    // check for blackjack
    if (isBlackjack(playerHand)) {
      messageEL.textContent = "Blackjack! You win!";
      handlePlayerWin();
      endGame();
      res.send('Blackjack! You win!');
      return;
    }

    // display the cards
    initHand(playerHand, dealerHand);
    showScore('player', playerHand);

    res.send('New game started.');
    res.send('Dealing two cards to player and dealer.');
    res.send('Player hand: ' + playerHand);
    res.send('Dealer hand: ' + dealerHand);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error starting new game.');
  }
});

