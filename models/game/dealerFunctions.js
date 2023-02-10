// dealerFunctions.js
// handles server side dealer logic

let newShoe = [];

const newShoe = () => {
    // logic for creating a new shoe of cards with 2 decks 

    for (let i = 0; i < 2; i++) {
        newShoe[i] = [];
        for (let j = 0; j < 52; j++) {
            newShoe[i][j] = {
                id: j,
                value: 0
            }
        }
    }
    console.log(newShoe);
}

const notifications = () => {
    // logic to send status notifications to the client
    // tell table to place bets
    let placeBets = console.log("Please Place Your Bets")
    // tell table "No more bets!" once 10 second timer runs out
    let noMoreBets = () => {
        setTimeout(() => {
            console.log("No more bets!")
            //update UI with timer TODO: update UI with timer


        }, 10000)
    }
    // update status letting the table know that its dealing cards
    let dealingCards = () => {
        setTimeout(() => {
            console.log("Dealing Cards!")
        }, 1000)
    // if dealer has blackjack, update status letting the table know that it has blackjack and end current game
    }
    let blackjack = () => {
        setTimeout(() => {
            console.log("Blackjack!")
        }, 1000)
    }
    // update status letting the table know that it has won
    let won = () => {
        setTimeout(() => {
            console.log("You Won!")
        }, 1000)
        // TODO: add logic to add or subtract credits from the player

    }

    // update status letting the table know that it has PUSHED
    let push = () => {
        setTimeout(() => {
            console.log("Dealer pushed!")
        }, 1000)
    
    
}
    // update status letting the table know that dealer has Bust
    let bust = () => {
        setTimeout(() => {
            console.log("Dealer busted!")
        }, 1000)
    
    // remind player to make a move after 20 seconds if they have been idle
    }
    let idle = () => {
        setTimeout(() => {
            console.log("Please make a move!")
        }, 20000)
    }
}
    