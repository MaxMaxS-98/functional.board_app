// playerFunctions.js
// handles client side player functions
const deck = require("../deck-of-cards.js");


//TODO: check with Lian to see if any of these functions need to communicate with database.

// function to hit and add a card to the player's hand

function hit(playerHand, deck) {
    // add a card to the player's hand, and pop it from the deck
    let newCard = deck.pop();
    //add the new card to player's hand
    playerHand.push(newCard);
    // return the new player hand
    console.log(playerHand);
    // add logic for UI 
   


}

// function to stand and keep the current hand
function stand(playerHand) {
    // return the player's hand
    console.log(playerHand);
    // TODO: add logic for UI here 
    //TODO:
    // add logic to go to next player in queue
}

// function to calculate the value of the player's hand
function calculateHandValue(playerHand) {
    let total = 0;
    //loop through the player's hand and add the value of each card
    for (let i = 0; i < playerHand.length; i++) {
         // add the value of the card to the total
       let cardValue = playerHand[i].value;
       // Check if the card is an Ace
       if (cardValue === "Ace") {  //**TODO: check deck-of-cards.js to see if "Ace" is defined */
        // add 11 to the total, unless it would cause a bust, then add 1
        if (cardValue + 11 <= 21) {
            total += 11;
        } else {
            total += 1; 
        }
         } else if (cardValue === "Jack" || cardValue === "Queen" || cardValue === "King") {
            // add 10 to the total
            total += 10;
        } else {
            // add the card value to the total
            total += parseInt(cardValue);
        }
    }
    // return the total value of the player's hand
    console.log(total);
    // TODO: add logic for UI here
}

// function to check if the player has busted
function checkBust(playerHand) {
    // calculate the value of the player's hand
    let total = calculateHandValue(playerHand);
    // check if the total is greater than 21
    if (total > 21) {
        // return true if the player has busted
        console.log("Player Busts.");
        //TODO: add logic for next player in queue

    } else {
        // return false if the player has not busted
        console.log("Player has not busted.");
        //TODO: go to playerOptions
    }
}
// export the functions
module.exports = {
    hit,
    stand,
    calculateHandValue,
    checkBust
}