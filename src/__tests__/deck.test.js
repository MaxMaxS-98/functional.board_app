const Deck = require("../helpers/class/Deck");
const { buildDeck } = require("../functions/buildDeck");

describe("Deck", () => {
  let deck;

  beforeEach(() => {
    buildDeck();
    deck = new Deck();
  });

  it("Should have 52 cards.", () => {
    expect(deck.shoe.cards.length).toBe(52);
  });
});

describe("card", () => {
  let deck;

  beforeEach(() => {
    buildDeck();
    deck = new Deck();
  });

  it("Should return a random card when drawCard is called", async () => {
    const card = await deck.drawCard();
    expect(deck.shoe.cards.indexOf(card)).toBe(-1);
    expect(deck.usedShoe.indexOf(card)).not.toBe(-1);
  });
});
