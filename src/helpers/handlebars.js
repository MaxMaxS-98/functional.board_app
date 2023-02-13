const source = document.getElementById("card-template").innerHTML;
const template = Handlebars.compile(source);

const deck = require("../db/activeShoe.json");
const cardContainer = document.getElementById("card-container");

deck.forEach(function(card) {
  const html = template(card);
  cardContainer.innerHTML += html;
});
