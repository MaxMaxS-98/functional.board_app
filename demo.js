// const Deck = require('deck-of-cards');
const deck = Deck();
deck.shuffle();
let playerHand = [];
let dealerHand = [];

document.getElementById("deal-button").addEventListener("click", dealInitialCards);

function dealInitialCards() {
  // clear the previous game state
  playerHand = [];
  dealerHand = [];
  document.getElementById("player-hand").innerHTML = "";
  document.getElementById("dealer-hand").innerHTML = "";
  document.getElementById("message").innerHTML = "";

  // deal two cards to the player and two to the dealer
  for (let i = 0; i < 2; i++) {
    console.log(deck.cards[i])
    playerHand.push(deck.cards[i]);
    dealerHand.push(deck.cards[i]);
  }

  // display the cards
  displayCards(playerHand, "player-hand");
  displayCards([dealerHand[0], "?"], "dealer-hand");

  // check for blackjack
  if (isBlackjack(playerHand)) {
    document.getElementById("message").textContent = "Blackjack! You win!";
  }
}

function displayCards(cards, elementId) {
  let cardHtml = "";
  for (let card of cards) {
    cardHtml += `<img src="${card.image}" alt="${card.code}">`;
  }
  document.getElementById(elementId).innerHTML = cardHtml;
}

function isBlackjack(hand) {
  return hand.length === 2 && calculateHandValue(hand) === 21;
}

function calculateHandValue(hand) {
  let total = 0;
  let hasAce = false;
  for (let card of hand) {
    if (card.rank === 'A') {
      hasAce = true;
    }
    total += card.points;
  }
  if (hasAce && total <= 11) {
    total += 10; // count Ace as 11 points if it won't cause bust
  }
  return total;
}
