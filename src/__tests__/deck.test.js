const jest = require('jest');
const Deck = require('../helpers/deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('Should have 52 cards.', () => {
    expect(deck.cards.length).toBe(52);
  });

  it('Should return a random card when drawCard is called', () => {
    const card = deck.drawCard();
    expect(deck.cards.indexOf(card)).toBe(-1);
    expect(deck.usedShoe.indexOf(card)).not.toBe(-1);
  });

  it('Should calculate the hand value correctly with Ace', () => {
    const hand = [      { name: 'Ace', value: 1 },      { name: '10', value: 10 },      { name: '5', value: 5 },    ];
    expect(deck.handValue(hand)).toBe(16);
  });

  it('Should calculate the hand value correctly with Ace', () => {
    const hand = [      { name: 'Ace', value: 11 },      { name: '3', value: 3 },      { name: '5', value: 5 },    ];
    expect(deck.handValue(hand)).toBe(18);
  });
});
