const fs = require("fs");
const path = require("path");
// retrieve deck from json file
// const deck = require("./buildDeck");

const startGame = async () => {
  var activePlayers = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/activePlayers.json"))
  );

  // console.log(activePlayers); // WORKS
  var numPlayers = Object.keys(activePlayers).length;
  // console.log(numPlayers); // WORKS

  // define variable to contain all the cards
  var deck = require("../db/activeShoe.json");
  var card = deck.cards;
  
  // SELECT RANDOM CARD FROM activeShoe.json and add it to testArray
  
  let testArray = [];
  let r = Math.floor(Math.random() * card.length);
  console.log(card[r]); //test works
  testArray.push(card[r]);
  console.log(testArray + " --testArray"); //test works
  
  let player1array = [];
  let player2array = [];
  let player3array = [];
  let player4array = [];
  let player5array = [];
  let dealerArray = [];
  
  // DRAW CARD OBJECT FROM THE ACTIVE-SHOE-JSON
  card.splice(r, 1);
  
  // UPDATE THE activeShoe.JSON FILE WITH MODIFIED CARD ARRAY
  
  fs.writeFileSync(
    path.join(__dirname, "../db/activeShoe.json"),
    JSON.stringify({ cards: card })
    ),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Shoe updated!");
      }
    };

  // UPDATE THE usedShoe.JSON FILE WITH THE NEW CARD ARRAY
  // fs.writeFileSync(path.join(__dirname, "../db/usedShoe.json"), JSON.stringify({ cards: cardRemoved })), (err) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Used shoe updated!");
  //   }
  // LOG UPDATED SHOE TO CONSOLE
  // wait 2 seconds
  new Promise((resolve) => setTimeout(resolve, 2000));

  // DEAL TABLE
  console.log("Dealing cards...");
  new Promise((resolve) => setTimeout(resolve, 1000));
  // Draw cards for 1 player
  const dealHand = async () => {
    // select a random card from the activeShoe.json
  let r = Math.floor(Math.random() * card.length);
  

  
  // console.log(activePlayers.length);
  // numPlayers = activePlayers.length;
  // for (let i = 0; i < numPlayers; i++) {
    // on each iteration, draw a card from the activeShoeArray and add it to the player array

   
    let card = card[r];
    // remove card from activeShoe.json
    card.splice(r, 1);
    // add to player array
    player1array.push(card);

    console.log(card[r] + " removed card."); //test
    // update activeShoe.json
    fs.writeFileSync(
      path.join(__dirname, "../db/activeShoe.json"),
      JSON.stringify({ cards: card })
    ),
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Shoe updated!");
        }
      };

    console.log("Player " + (i + 1) + " has been dealt a card.");
    new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(player1array);
  }
};
startGame();

// console.log(shoe);
// let deckLength = deck.length;

// REMOVE CARD FROM SHOE
// const shoe.cards.splice(r, 1);

// console.log(card[0]); // WORKS

// var draw = shoe.cards[Math.floor(Math.random() * 52 )]; //shoe.cards.length
// console.log(draw);//check work

// console.log(shoe);
// let deckLength = deck.length;
// console.log(deckLength);

// var players = []; //TODO: figure out how to get logged in players in this array
// for (let i = 0; i < numPlayers; i++) {
//   players.push("Player" + (i + 1));
// }
// console.log(players);
// let dealerHand = [];
// let playerHand = [];

// console.log("Starting a new game...");
// await new Promise((resolve) => setTimeout(resolve, 2000));
// console.log("Dealing cards...");
// await new Promise((resolve) => setTimeout(resolve, 1000));

// // deal cards to each player individually one by one
// let drawCard = (player, draw) => {
//   if (draw.length < 15) {
//     console.log("Last hand -- shoe ending.");
//     console.log(draw.length);

//   }

//   // let card = draw.shift();
//   console.log(`${player.name} draws ${cards.name} of ${cards.suit} with a value of ${cards.value}.`);

// };

// let index = 0;
// let drawInterval = setInterval(() => {
//   if (index === players.length) {
//     clearInterval(drawInterval);
//     return;
//   }

//   drawCard(players[index], draw);
//   index++;
// }, 2000);

// pick a random number from cardIDs to deal players based on the id of the card in the JSON file

//   let faceDownCard = dealerHand[0].value;
//   let faceDownSuit = dealerHand[0].suit;
//   let faceDownName = dealerHand[0].name;

//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("Dealer was dealt a face down card.");

//   for (let i = 0; i < numPlayers; i++) {
//     players[i].push(deck.pop());
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     console.log(
//       `${players[i]} was dealt a ${players[i][0].name} of ${players[i][0].suit}. Value: ${players[i][0].value}.`
//     );
//   }

//   dealerHand.push(deck.pop());
//   let faceUpCard = dealerHand[1].value;
//   let faceUpSuit = dealerHand[1].suit;
//   let faceUpName = dealerHand[1].name;

//   console.log(`Dealer's up card is ${faceUpName} of ${faceUpSuit}.`);
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   console.log("Checking for dealer blackjack...");
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   if (faceDownCard + faceUpCard === 21) {
//     console.log("Dealer has blackjack!");
//     // end the game, push all arrays to usedShoe.json
//     fs.writeFileSync(
//       path.join(__dirname, "../db/usedShoe.json"),
//       JSON.stringify(players)
//     );
//     console.log("Game over!");
//     process.exit();
//   } else {
//     console.log("Dealer has no blackjack!");
//     // write instructions here
//   }
// };
