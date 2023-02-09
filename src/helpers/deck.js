//** from playing-cards-js */

export default class Deck {
	constructor(options = {}) {
	  const defaultOptions = { jokers: 0 };
	  this.opts = { ...defaultOptions, ...options };
	  this.draw = this.moveTo.bind(this, 'held');
	  this.drawToDiscard = this.moveTo.bind(this, 'discard');
	  this.reset = this.initPiles;
	  this.initPiles();
	}
  
	initPiles() {
	  this.held = [];
	  this.discard = [];
	  this.cards = this.createDeck();
	  return this.cards;
	}
  
	moveTo(pile, amount = 1) {
	  if (amount < 1) {
		return [];
	  }
	  const moved = this.cards.slice(0, amount);
	  this.cards.splice(0, amount);
	  this[pile] = [...moved, ...this[pile]];
	  return moved;
	}
  
	createDeck() {
	  const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	  const names = [
		{ name: '1', value: 1 },
		{ name: '2', value: 2 },
		{ name: '3', value: 3 },
		{ name: '4', value: 4 },
		{ name: '5', value: 5 },
		{ name: '6', value: 6 },
		{ name: '7', value: 7 },
		{ name: '8', value: 8 },
		{ name: '9', value: 9 },
		{ name: '10', value: 10 },
		{ name: 'J', value: 10 },
		{ name: 'Q', value: 10 },
		{ name: 'K', value: 10 },
	  ];
	  const deck = [];
	  let id = 1;
  
	  suits.forEach(suit => {
		names.forEach(name => {
		  deck.push({ id, suit, name: name.name, value: name.value });
		  id++;
		});
	  });
  
	  if (this.opts.jokers) {
		for (let i = this.opts.jokers; i; i -= 1) {
		  deck.push({ id, joker: true });
		  id++;
		}
	  }
	  return deck;
	}

	shuffle() {
		for (let i = this.cards.length; i; i -= 1) {
			const random = Math.floor(Math.random() * i);

			[this.cards[i - 1], this.cards[random]] = [this.cards[random], this.cards[i - 1]];
		}

		return this.cards;
	}
}
