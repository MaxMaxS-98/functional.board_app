
// const $playerHandEl = document.getElementById("player-hand");
// const $dealerHandEl = document.getElementById("dealer-hand");
// const messageEL = document.getElementById("message");
// const betAmountEl = document.getElementById("bet-amount");
// const betEl = document.getElementById("bet")
// const balanceEl = document.getElementById("balance")
// const decrementBetBtn = document.getElementById("decrement-bet");
// const incrementBetBtn = document.getElementById("increment-bet");
// const placeBetBtn = document.getElementById("place-bet");
// const hitBtn = document.getElementById("hit-button");
// const standBtn = document.getElementById("stand-button")
const initBalance = 1000;
const initBet = 15
var currentBet = initBet;
var currentBalance = initBalance

let playerHand = [];
let dealerHand = [];
var deck = new Deck();


function gameInit() {
    updateBalance()
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
    // display the cards
    initHand(playerHand, dealerHand)
    showScore('player', playerHand)
    // check for blackjack
    if (isBlackjack(playerHand)) {
        messageEL.textContent = "Blackjack! You win!";
        handlePlayerWin()
        endGame()
    }
}

function initHand(playerhand, dealerhand) {
    for (let i = 0; i < 2; i++) {
        let $playerCardEl = createCardEl(playerhand[i], "player", i + 1);
        $playerHandEl.appendChild($playerCardEl);

        let $dealerCardEl;
        if (i === 0) {
            dealerhand[i].setSide('back')
            $dealerCardEl = createCardEl(dealerhand[i], "dealer", i + 1);
        } else {
            $dealerCardEl = createCardEl(dealerhand[i], "dealer", i + 1);
        }
        $dealerHandEl.appendChild($dealerCardEl);
    }
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
        handlePlayerWin()
    } else if (handValue > calculateHandValue(playerHand)) {
        messageEL.textContent = "Dealer wins!";
    } else if (handValue < calculateHandValue(playerHand)) {
        messageEL.textContent = "You win!";
        handlePlayerWin()
    } else {
        messageEL.textContent = "Push! It's a tie.";
        handlePush()
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
    currentBet = 15
    updateBalance()
    updateBet()
    // betAmountEl.textContent = currentBet
    console.log(currentBalance)
    console.log(currentBet)
    hitBtn.style.display = "none";
    standBtn.style.display = "none";
    betEl.style.display = "block";
    // Enable buttons
    placeBetBtn.disabled = false;
    decrementBetBtn.disabled = false;
    incrementBetBtn.disabled = false;

}


function createCardEl(card, dealerOrPlayer, index) {
    let html = `<div id="${dealerOrPlayer}-hand-${index}" class="col-1 p-2 align-items-center justify-content-center"></div>`;
    var $newCardEl = document.createElement("div");
    $newCardEl.innerHTML = html
    card.mount($newCardEl.firstChild)
    return $newCardEl;
}

const handlePlayerWin = () => currentBalance += (currentBet * 2)
const handlePush = () => currentBalance += currentBet
const updateBalance = () => balanceEl.textContent = currentBalance - currentBet
const updateBet = () => betAmountEl.textContent = currentBet

placeBetBtn.addEventListener("click", function () {
    // take the bet
    currentBalance = currentBalance - currentBet
    balanceEl.textContent = currentBalance
    console.log(currentBalance)
    // Disable buttons
    placeBetBtn.disabled = true;
    decrementBetBtn.disabled = true;
    incrementBetBtn.disabled = true;
    // Show countdown message
    let count = 3;
    let countdownInterval = setInterval(function () {
        if (count > 0) {
            messageEL.textContent = `Starting game in ${count} seconds...`;
            count--;
        } else {
            clearInterval(countdownInterval);
            // Hide the Place Bet button and show the Hit and Stand buttons
            messageEL.textContent = "";
            betEl.style.display = "none";
            hitBtn.style.display = "block";
            standBtn.style.display = "block";
            gameInit();
        }
    }, 1000);
});

decrementBetBtn.addEventListener("click", function () {
    if (currentBet > 15) {
        currentBet -= 15;
        updateBet()
        updateBalance()
    } else if (currentBet <= 15) {
        window.alert(`The minimum bet is 15.`)
    }
});

incrementBetBtn.addEventListener("click", function () {
    if (Number (balanceEl.textContent) >= 15) {
        currentBet += 15;
        updateBet()
        updateBalance()
    } else if (Number(balanceEl.textContent) <= 0) {
        window.alert(`Insufficient balance!`)
    }

});

hitBtn.addEventListener("click", () => playerHit(deck));
standBtn.addEventListener("click", () => playerStand(deck));
