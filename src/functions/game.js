const fs = require("fs");
const path = require("path");
const deck = require("./buildDeck");

const startGame = async () => {
  var activePlayers = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/activePlayers.json"))
  );
  // console.log(activePlayers); // WORKS
  var numPlayers = Object.keys(activePlayers).length;
  // console.log(numPlayers); // WORKS
//read activeShoe.json and assign to variable shoe


  const shoe = require("../db/activeShoe.json");
  var card = shoe.cards;

  // LOG RANDOM CARD TO CONSOLE
  let r = Math.floor(Math.random() * card.length);
  console.log(card[r]);

  // ADD THAT CARD TO PLAYER-ARRAY
  let player1array = [];
  console.log(player1array);

  player1array.push(card[r]);
  console.log(player1array);



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

  
  
 


};


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

startGame();
