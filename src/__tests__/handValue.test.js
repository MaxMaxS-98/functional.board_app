const Deck = require("../helpers/class/Deck");
const { buildDeck } = require("../functions/buildDeck");
buildDeck();
describe("handValue", () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it("Should calculate the hand value correctly with Ace", () => {
    const hand = [      { name: "Ace", value: 1 },      { name: "10", value: 10 },      { name: "5", value: 5 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue === 16 || handValue === 26).toBe(true);
  });

  it("Should calculate the hand value correctly with Ace", () => {
    const hand = [      { name: "Ace", value: 1 },      { name: "3", value: 3 },      { name: "5", value: 5 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue === 9 || handValue === 19).toBe(true);
  });

  it("Should calculate the hand value correctly with face cards", () => {
    const hand = [      { name: "Queen", value: 10 },      { name: "King", value: 10 },      { name: "Jack", value: 10 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue).toBe(30);
  });

  it("Should calculate the hand value correctly with normal cards", () => {
    const hand = [      { name: "2", value: 2 },      { name: "7", value: 7 },      { name: "9", value: 9 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue).toBe(18);
  });

  it("Should calculate the hand value correctly with Ace and normal cards", () => {
    const hand = [      { name: "2", value: 2 },      { name: "Queen", value: 10 },      { name: "Ace", value: 1 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue === 13 || handValue === 23).toBe(true);
  });

  it("Should calculate the hand value correctly with multiple Aces", () => {
    const hand = [      { name: "Ace", value: 1 },      { name: "Ace", value: 1 },      { name: "Ace", value: 1 },      { name: "Ace", value: 1 },      { name: "Ace", value: 1 },    ];
    const handValue = deck.handValue(hand);
    expect(handValue).toBe(15);
  });

  it("Should return 0 for an empty hand", () => {
    const hand = [];
    const handValue = deck.handValue(hand);
    expect(handValue).toBe(0);
  });
});
