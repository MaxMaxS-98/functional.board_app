const Deck = require("../helpers/class/Deck");

describe("handValue", () => {
let deck;

beforeEach(() => {
deck = new Deck();
});

it("Should calculate the hand value correctly with Ace", () => {
const hand = [
{ name: "Ace", value: 1 },
{ name: "10", value: 10 },
{ name: "5", value: 5 },
];
const handValue = deck.handValue(hand);
expect(handValue === 16 || handValue === 26).toBe(true);
});

it("Should calculate the hand value correctly with Ace", () => {
const hand = [
{ name: "Ace", value: 1 },
{ name: "3", value: 3 },
{ name: "5", value: 5 },
];
const handValue = deck.handValue(hand);
expect(handValue === 9 || handValue === 19).toBe(true);
});
});