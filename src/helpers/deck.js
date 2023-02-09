class Deck {
  constructor(options = {}) {
    const defaultOptions = { numberOfDecks: 2 };
    this.opts = { ...defaultOptions, ...options };
    this.cards = this.createDeck();
  }

  createDeck() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const names = [
      { name: "1", value: 1 },
      { name: "2", value: 2 },
      { name: "3", value: 3 },
      { name: "4", value: 4 },
      { name: "5", value: 5 },
      { name: "6", value: 6 },
      { name: "7", value: 7 },
      { name: "8", value: 8 },
      { name: "9", value: 9 },
      { name: "10", value: 10 },
      { name: "J", value: 10 },
      { name: "Q", value: 10 },
      { name: "K", value: 10 },
    ];
    let deck = [];
    let id = 1;

    for (let d = 0; d < this.opts.numberOfDecks; d++) {
      suits.forEach((suit) => {
        names.forEach((name) => {
          deck.push({
            id: id++,
            suit: suit,
			name: this.name,
            value: this.value,
          });
        });
      });
    }
    return deck;
  }
}
module.exports = Deck;
