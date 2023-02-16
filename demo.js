
const $playerHandEl = document.getElementById("player-hand");
const $dealerHandEl = document.getElementById("dealer-hand");
const messageEL = document.getElementById("message");
let playerHand = [];
let dealerHand = [];
var deck = new Deck();

function gameInit() {
    // clear the previous game state
    deck = new Deck()
    deck.flip()
    deck.shuffle();

    playerHand = [];
    dealerHand = [];

    $playerHandEl.innerHTML = "";
    $dealerHandEl.innerHTML = "";
    messageEL.innerHTML = "";

    // deal two cards to the player and two to the dealer
    drawCard(deck, playerHand, 2);
    drawCard(deck, dealerHand, 2)

    console.log(playerHand, dealerHand)
    // display the cards
    displayInitialCards(playerHand, dealerHand)
    showScore('player', playerHand)
    const initCardValue = calculateHandValue(playerHand)
    console.log(initCardValue)
    // check for blackjack
    if (isBlackjack(playerHand)) {
        messageEL.textContent = "Blackjack! You win!";
        endGame()
    }
}

function displayInitialCards(playerhand, dealerhand) {
    $playerHandEl.innerHTML += `<div id='player-hand-1'class="col-1 card"></div>`;
    $playerHandEl.innerHTML += `<div id='player-hand-2'class="col-1 card"></div>`;
    let $playerHand1 = document.getElementById("player-hand-1");
    let $playerHand2 = document.getElementById("player-hand-2");
    playerhand[0].mount($playerHand1);
    playerhand[1].mount($playerHand2);

    $dealerHandEl.innerHTML += `<div id='dealer-hand-1'class="col-1 card"></div>`;
    $dealerHandEl.innerHTML += `<div id='dealer-hand-2'class="col-1 card"></div>`;
    let $dealerHand1 = document.getElementById("dealer-hand-1");
    let $dealerHand2 = document.getElementById("dealer-hand-2");
    dealerhand[0].setSide('back')
    dealerhand[0].mount($dealerHand1);
    dealerhand[1].mount($dealerHand2);
}

function isBlackjack(hand) {
    return hand.length === 2 && calculateHandValue(hand) === 21;
}

function calculateHandValue(hand) {
    let total = 0;
    let hasAce = false;
    for (let card of hand) {
        if (card.rank == 1) {
            hasAce = true;
        } else if (card.rank >= 10) {
            total += 10
        } else
            total += card.rank;
    }
    if (hasAce) {
        total += (total + 11 <= 21) ? 11 : 1;
      }
    return total;
}

const drawCard = (deck, hand, number) => {
    for (let i = 0; i < number; i++) {
        var topOfDeck = deck.cards[0];
        hand.push(topOfDeck);
        deck.cards.splice(0, 1)
    }
}

function playerHit(deck) {
    drawCard(deck, playerHand, 1);
    const $newCard = createCardEl(playerHand[playerHand.length - 1], 'player', playerHand.length);
    $playerHandEl.appendChild($newCard);
    const handValue = calculateHandValue(playerHand);
    showScore('player', playerHand)

    // console.log(playerHand)
    // console.log(handValue)
    if (handValue > 21) {
        messageEL.textContent = "Bust! You lose.";
        endGame();
    } else if (handValue === 21) {
        messageEL.textContent = "21! Let's see what the dealer has.";
        dealerTurn(deck);
    }
}

function playerStand(deck) {
    messageEL.textContent = "Let's see what the dealer has.";
    dealerTurn(deck);
}

function dealerTurn(deck) {
    dealerHand[0].setSide("front");

    let handValue = calculateHandValue(dealerHand);
    while (handValue < 17) {
        drawCard(deck, dealerHand, 1);
        const $newCard = createCardEl(dealerHand[dealerHand.length - 1], 'dealer', dealerHand.length);
        $dealerHandEl.appendChild($newCard);
        handValue = calculateHandValue(dealerHand);
    }

    if (handValue > 21) {
        messageEL.textContent = "Dealer busts! You win!";
    } else if (handValue > calculateHandValue(playerHand)) {
        messageEL.textContent = "Dealer wins!";
    } else if (handValue < calculateHandValue(playerHand)) {
        messageEL.textContent = "You win!";
    } else {
        messageEL.textContent = "Push! It's a tie.";
    }
    endGame();
}

const showScore = (playerOrDealer, hand) => {
      let scoreEL = document.getElementById(`${playerOrDealer}-score`)
      let playerScore = calculateHandValue(hand)
      scoreEL.textContent = `Player Hand Value: ${playerScore}`
}

function endGame() {
    // Hide the Hit and Stand buttons and show the Deal button
    document.getElementById("hit-button").style.display = "none";
    document.getElementById("stand-button").style.display = "none";
    document.getElementById("deal-button").style.display = "block";
}


function createCardEl(card, dealerOrPlayer, index) {
    var $newCardEl = document.createElement("div");
    $newCardEl.classList.add("col-1","p-2", "align-items-center", "justify-content-center", "card");
    $newCardEl.setAttribute('id', `${dealerOrPlayer}-hand-${index}`)
    card.mount($newCardEl)
    return $newCardEl;
}

document.getElementById("deal-button").addEventListener("click", function () {
    // Hide the Deal button and show the Hit and Stand buttons
    document.getElementById("deal-button").style.display = "none";
    document.getElementById("hit-button").style.display = "block";
    document.getElementById("stand-button").style.display = "block";

    gameInit();
});
document.getElementById("hit-button").addEventListener("click", () => playerHit(deck));
document.getElementById("stand-button").addEventListener("click", () => playerStand(deck));
