const Handlebars = require('handlebars');

class Deck {
  constructor(options = {}) {
    const defaultOptions = { numberOfDecks: 1 };
    this.opts = { ...defaultOptions, ...options };
    this.cards = this.createDeck();
  }

  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    const names = [
      { name: 'Ace', value: 1 || 11 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
      { name: '4', value: 4 },
      { name: '5', value: 5 },
      { name: '6', value: 6 },
      { name: '7', value: 7 },
      { name: '8', value: 8 },
      { name: '9', value: 9 },
      { name: '10', value: 10 },
      { name: 'Jack', value: 10 },
      { name: 'Queen', value: 10 },
      { name: 'King', value: 10 },
    ];

    Handlebars.registerHelper('card', function (value, suit, id) {
      var html = `<div class='card ${value} ${suit}' id=${id}></div>`;
      const htmlToLowerCase = html.toLowerCase();
      return new Handlebars.SafeString(htmlToLowerCase);
    });

    let deck = [];
    let id = 1;

    for (let d = 0; d < this.opts.numberOfDecks; d++) {
      suits.forEach((suit) => {
        names.forEach((name) => {
          const card = {
            id: 'c' + id++,
            facedown: false,
            name: name.name,
            suit: suit,
            value: name.value,
            html: Handlebars.helpers.card(name.name, suit, 'c' +(id -1)),
            img_path: (this.facedown === false) ? 
            `../../assets/images/cards/face_down.png` :
            `../../assets/images/cards/${name.name.toLowerCase()}_of_${suit.toLowerCase()}.png` 
          };
          deck.push(card);
        });
      });
    }
    return deck;
  }
}

module.exports = Deck;
