// const Deck = require('deck-of-cards');
const $playerHandEl = document.getElementById("player-hand");
const $dealerHandEl = document.getElementById("dealer-hand");
const messageEL = document.getElementById("message");
let playerHand = [];
let dealerHand = [];

document.getElementById("deal-button").addEventListener("click", gameInit);

function gameInit() {
    // clear the previous game state
    const deck = new Deck();
    deck.shuffle();

    playerHand = [];
    dealerHand = [];

    $playerHandEl.innerHTML = "";
    $dealerHandEl.innerHTML = "";
    messageEL.innerHTML = "";

    // deal two cards to the player and two to the dealer
    drawCard(deck, playerHand);
    drawCard(deck, dealerHand)

    console.log(playerHand, dealerHand)
    // display the cards
    displayInitialCards(playerHand, dealerHand)


    // check for blackjack
    if (isBlackjack(playerHand)) {
        messageEL.textContent = "Blackjack! You win!";
    }
}

function displayInitialCards(playerhand, dealerhand) {
    $playerHandEl.innerHTML += `<div id='player-hand-1'class="col-4 card"></div>`;
    $playerHandEl.innerHTML += `<div id='player-hand-2'class="col-4 card"></div>`;
    let $playerHand1 = document.getElementById("player-hand-1");
    let $playerHand2 = document.getElementById("player-hand-2");
    playerhand[0].setSide('front')
    playerhand[0].mount($playerHand1);
    playerhand[1].setSide('front')
    playerhand[1].mount($playerHand2);

    $dealerHandEl.innerHTML += `<div id='dealer-hand-1'class="col-4 card"></div>`;
    $dealerHandEl.innerHTML += `<div id='dealer-hand-2'class="col-4 card"></div>`;
    let $dealerHand1 = document.getElementById("dealer-hand-1");
    let $dealerHand2 = document.getElementById("dealer-hand-2");
    dealerhand[0].mount($dealerHand1);
    dealerhand[1].setSide('front')
    dealerhand[1].mount($dealerHand2);
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

const drawCard = (deck, hand) => {
    for (let i = 0; i < 2; i++) {
        var topOfDeck = deck.cards[0];
        console.log(topOfDeck)
        hand.push(topOfDeck);
        deck.cards.splice(0,1)
        console.log(deck.cards)
    }
}