// const Deck = require('deck-of-cards');
const deck = Deck();
const $playerHand1El = document.getElementById("player-hand1");
const $playerHand2El = document.getElementById("player-hand2");

const $dealerHandEl = document.getElementById("dealer-hand");
const messageEL = document.getElementById("message");
let playerHand = [];
let dealerHand = [];

document.getElementById("deal-button").addEventListener("click", dealInitialCards);

function dealInitialCards() {
    // clear the previous game state
    deck.shuffle();

    playerHand = [];
    dealerHand = [];

    $playerHandEl.innerHTML = "";
    $dealerHandEl.innerHTML = "";
    messageEL.innerHTML = "";

    // deal two cards to the player and two to the dealer
    for (let i = 0; i < 2; i++) {
        // console.log(deck.cards[i])
        playerHand.push(deck.cards[i]);
        dealerHand.push(deck.cards[(i + 1)]);
    }
    console.log(playerHand, dealerHand)
    // display the cards
    // displayCards(playerHand, $playerHandEl);
    // displayCards([dealerHand[0], dealerHand[1].setSide('back')], $dealerHandEl);
 

    // check for blackjack
    if (isBlackjack(playerHand)) {
        messageEL.textContent = "Blackjack! You win!";
    }
}

function displayPlayerCards (hand) {
    for (let i = 0; i < hand.length; i++) {
            
    }
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
