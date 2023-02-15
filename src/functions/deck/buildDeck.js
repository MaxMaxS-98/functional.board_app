const fs = require('fs');
const path = require('path');
const Deck = require('../../helpers/deck');
// const url = 'http://localhost:3001/api/table/1'
// const herokuUrl = 'https://blackjack-blitz-test.herokuapp.com/api/table/1'
// const buildDeck = async () => {
  
//   const buildDeck = async () => {
//     const activeShoe = new Deck();
//     const response = await fetch(herokuUrl, {
//       method: 'PUT',
//       body: JSON.stringify(activeShoe),
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       console.log(`Deck status updated!`);
//     } else {
//       console.error(err);
//     }
//   };
//   buildDeck();
// };
//   module.exports = { buildDeck };

// const buildDeck = async () => {
//   const activeShoe = new Deck();
//   const response = await fetch(`/api/table/1`, {
//     method: 'PUT',
//     body: JSON.stringify(activeShoe),
//     headers: { 'Content-Type': 'application/json' }
//   })
//   if (response.ok) {
//     console.log(`Deck status updated!`)
//   } else {
//     console.error(err);
//   }
// }

const buildDeck = async () => {
  const activeShoe = new Deck();
  const filePath = path.join(__dirname, '../../db/activeShoe.json');
  fs.writeFileSync(filePath, JSON.stringify(activeShoe));
};

buildDeck();
module.exports = { buildDeck } 