const drawCard = async () => {
  const fs = require("fs");
  const path = require("path");
  // const delay = require("./delayScript");
  const shoe = require("../db/activeShoe.json");
  const length = shoe.cards.length;
  const r = Math.floor(Math.random() * length);
  const cardSelected = await shoe.cards[r];

  // remove from active Shoe JSON
  await shoe.cards.splice(r, 1);
  // update activeShoe.json
  await fs.readFile(
    path.join(__dirname, "../db/usedShoe.json"),
    (err, data) => {
      if (err) throw err;
      let usedShoe = JSON.parse(data);
      usedShoe.push(cardSelected);
      fs.writeFile(
        path.join(__dirname, "../db/usedShoe.json"),
        JSON.stringify(usedShoe),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      console.log(cardSelected.name, cardSelected.suit, cardSelected.value);
        console.log(cardSelected);

        return cardSelected;
        
    }
  );
}


module.exports = drawCard;
