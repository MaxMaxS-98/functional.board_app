//dealerFunctions.js

const { startTimer } = require('./dealerFunctions.js');




// Prompt users to place bets
function placeBets() {
    var betAmount = parseInt(document.getElementById("betAmount").value);
    var playerCount = parseInt(document.getElementById("playerCount").value);

    try {

        if (isNaN(betAmount) || betAmount < 1) {
            return;
        }
        if (playerCount < 1) {
            return;
        }
        if (betAmount >= 5) {
            startTimer("bet");
            console.log("Please place your bets!"); // TODO: Integrate with UI
        }
    } catch (err) {
        console.log(err);
        return;
    }
}

// Determine how many active players are at the table
let activePlayersCount = activePlayers.length;

// Deal cards to players


