// newShoe.js
//const deck = require('../deck-of-cards.js');


const newShoe = () => {
    // logic for creating a new shoe of cards

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
module.exports = newShoe;
