// game.js
const fs = require('fs');
const path = require('path');
const deck = require('./buildDeck');

const startGame = async () => {
    // count the number of objects in activeplayers.json file
    // and assign it to numPlayers
    let activePlayers = fs.readFileSync(path.join(__dirname, '../db/activePlayers.json'));
    console.log(activePlayers); //check work
    const numPlayers = activePlayers.length;
    console.log(numPlayers); //check work
    


    const shoe = require('../db/activeShoe.json');
    console.log(shoe); //check work
    //length of cards left in shoe
    let deckLength = deck.length;
    console.log(deckLength); //check work
    

    // shuffle deck
    //TODO:
    //create a holding array for holding cards for each player and assign a variable to each array

    let playerHand = [];
    for (let i = 0; i < numPlayers; i++) {
        playerHand[i] = [];

    }

    // create a holding array for dealer
    let dealerHand = [];
  
    console.log ("Starting a new game...");
    // pause for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log ("Dealing cards...");

    // pause for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Deal cards one by one to each player.
    for (let i = 0; i < numPlayers; i++) {
        playerHand[i].push(deck.pop());
        // wait 1 second between each deal
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log ("Player " + (i + 1) + " was dealt a " + playerHand[i][0].name + " of " + playerHand[i][0].suit + ". Value: " + playerHand[i][0].value);
       
    }

    // Deal a face down card to the dealer.
    dealerHand.push(deck.pop());
    //store all facedown information
    let faceDownCard = faceDownCard.value;
    let faceDownSuit = faceDownCard.suit;
    let faceDownName = faceDownCard.name;

    // wait 1 second between each deal
    await new Promise(resolve => setTimeout(resolve, 1000));
   
    console.log ("Dealer was dealt a face down card.");
    
    // Deal second cards  one by one to each player.
   
    for (let i = 0; i < numPlayers; i++) {
        playerHand[i].push(deck.pop());
        // wait 1 second between each deal
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log ("Player " + (i + 1) + " was dealt a " + playerHand[i][0].name + " of " + playerHand[i][0].suit + ". Value: " + playerHand[i][0].value);
       
    }

    // Deal a face up card to the dealer.
    dealerHand.push(deck.pop());
    //store all faceup information
    let faceUpCard = faceUpCard.value;
    let faceUpSuit = faceUpCard.suit;
    let faceUpName = faceUpCard.name;

    // wait for 3 seconds before next action
    console.log ("Dealer's up card is " + faceUpName + " of " + faceUpSuit + ".");

    await new Promise(resolve => setTimeout(resolve, 3000));

   // check for dealer blackjack
   console.log ("Checking for dealer blackjack...");
   //wait 3 seconds before next action
    await new Promise(resolve => setTimeout(resolve, 3000));

   if ((faceDownCard + faceUpCard) === 21) {
    console.log ("Dealer has blackjack!");
    // end the game, push all arrays to usedShoe.json
    fs.writeFileSync(path.join(__dirname, '../db/usedShoe.json'), JSON.stringify(playerHand));
    fs.writeFileSync(path.join(__dirname, '../db/usedShoe.json'), JSON.stringify(dealerHand));
    console.log ("Game over!");
    process.exit();
    } else {
        console.log ("Dealer has no blackjack!");
        // write instructions here
    }
}

startGame();

