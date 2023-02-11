// dealerFunctions.js
// handles server side dealer logic


import { Deck, Player } from 'playing-cards-js'; 
const deck = new Deck();


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
    // update status letting the player know that they won  
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
           
        }, 1000)
        // if player has not made a move after 20 seconds, go to next player
        //TODO: add logic to make a move if player has not made a move after 20 seconds
        
    }
    // if dealer shows an Ace, update status letting the table know that it has Ace, and ask player if they want to buy insurance
    }
    let ace = () => {
        setTimeout(() => {
            console.log("Insurance anyone?")
            // wait 5 seconds before closing insurance window
            setTimeout(() => {
                console.log("Insurance closed.")
            }, 5000)
      
        }, 1000)
    }
        // check hole card for a 10 value card
        // if hole card is a 10 value card, update status letting the table know that it has blackjack and end current game
       const checkHoleCard = () => {
            setTimeout(() => {
                console.log("Dealer has blackjack!")
            }, 1000)
            setTimeout(() => {
                newGame()
            }, 1000)
    
    // check split
    // if player has two cards of the same value, update status letting the table know that it has split and ask player if they want to split
    }
    let split = () => {
        if (firstCard.value === secondCard.value) 
        // display split button TODO: *******************
        setTimeout(() => {
            // Player has a split hand, wait for 20 seconds for player to make a move
            console.log("Player has a split hand, waiting for 20 seconds for player to make a move...")
            setTimeout(() => {
                console.log("Player has made a move!")
            }, 20000)
            setTimeout(() => {
                nextPlayer()
            }, 1000)
            
        }, 1000)


    }
    // if players first two cards are less than 21, update status letting the player know to make a move
    
    let lessThan21 = () => {
        if (firstCard.value && secondCard.value < 21) {
            // display hit button TODO: *******************
            // display stay button TODO: *******************

            setTimeout(() => {
                console.log("Player, make a move! Do you want to hit or stay?")
            }, 1000)
            setTimeout(() => {
                nextPlayer()
            }, 1000)
        }
    }
    // if players first two cards are equal to 21, update status letting them know they have blackjack and go to next player

    let equal21 = () => {
        if (firstCard.value && secondCard.value === 21) {
            setTimeout(() => {
                console.log("Congratulations! You have blackjack!")
            }, 3000)
            setTimeout(() => {
                payPlayer() //TODO: add logic to pay player
                nextPlayer() //TODO: add logic to go to next player
            }, 1000)
        }
    }

    // dealTable()
    // pull from deck and deal cards to players
    let dealTable = () => {
        // check to see how many players are at the table
        //TODO: add logic to check how many activeplayers are at the table by checking the activeplayers array
        // if there is 1 player or more deal 2 cards to each player in 1 second intervals
        for (let i = 0; i < activePlayers.length; i++) {
            setTimeout(() => {
                console.log(activePlayers[i].name + " has " + activePlayers[i].hand.length + " cards in their hand.")
            }, 1000 * i)
       

        for (let i = 0; i < 1; i++) {
        }
        // deal cards to each player
    }


    }