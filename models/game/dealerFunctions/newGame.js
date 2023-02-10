
let newDeck = [];

// newGame.js
// start newGame
const startNewGame = () => {
    // logic for starting a new game
    // create new deck
    newDeck = [];
    for (let i = 0; i < 52; i++) {
        newDeck[i] = {
            id: i,
            value: 0
        }
    }
    console.log(newDeck);
}

module.exports = startNewGame;