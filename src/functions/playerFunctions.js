//retrieve balance data from sequelize model
const { Player } = require("./models");
const { startCountdown } = require("./timer");


const credit = Player.credit; // Starting balance of the user
let betAmount = 25; // Initial value of the bet amount

// Function to prompt the user to place their bet
const placeBet = () => {
  betAmount = 25 // prompt("Please enter your bet amount:");TODO:retrieve from UI
  console.log(`Bet of $${betAmount} placed.`);
  return betAmount;
};

// Function to display the countdown for 10 seconds TODO: send to UI


// Function to start the game and subtract the bet amount from the player's balance
const startGame = () => {
  credit -= betAmount;
  console.log(`Balance: $${balance}`);
  console.log("Dealing cards to players...");
  // Implementation for dealing cards to players goes here
};

// Display the user's balance
console.log(`Balance: $${balance}`);

// Call the placeBet function
placeBet();

// Call the startCountdown function
startCountdown();
