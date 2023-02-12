const {
  startGame,
  playerHand,
  dealerHand,
  playerHandValue,
  dealerHandValue,
  playerBank,
  playerBet,
  playerTotal,
  dealerTotal,
  playerBust,
  dealerBust,
  dealerUp,
  dealerDown,
  gameCount,
  reset,
  checkDealerBlackjack,
} = require("../functions/singlePlayerGameFunctions");

describe("Blackjack Game", () => {
  beforeEach(() => {
    reset();
  });

  it("starts a new game of Blackjack", async () => {
    await startGame();
    expect(playerHand).toHaveLength(2);
    expect(dealerHand).toHaveLength(2);
    expect(playerHandValue).toBeGreaterThan(0);
    expect(dealerHandValue).toBeGreaterThan(0);
    expect(playerBank).toEqual(975);
    expect(playerBet).toEqual(25);
    expect(playerTotal).toBeGreaterThan(0);
    expect(dealerTotal).toBeGreaterThan(0);
    expect(playerBust).toBeFalsy();
    expect(dealerBust).toBeFalsy();
    expect(dealerUp).toHaveLength(1);
    expect(dealerDown).toHaveLength(0);
    expect(gameCount).toEqual(1);
  });

  it("resets the game variables", () => {
    playerHand.push({ name: "Ace", value: 1 });
    dealerHand.push({ name: "King", value: 10 });
    playerHandValue = 21;
    dealerHandValue = 20;
    playerBank = 900;
    playerBet = 50;
    playerTotal = 21;
    dealerTotal = 20;
    playerBust = true;
    dealerBust = false;
    dealerUp.push({ name: "Queen", value: 10 });
    dealerDown.push({ name: "Jack", value: 10 });
    gameCount = 2;
    reset();
    expect(playerHand).toHaveLength(0);
    expect(dealerHand).toHaveLength(0);
    expect(playerHandValue).toEqual(0);
    expect(dealerHandValue).toEqual(0);
    expect(playerBank).toEqual(1000);
    expect(playerBet).toEqual(25);
    expect(playerTotal).toEqual(0);
    expect(dealerTotal).toEqual(0);
    expect(playerBust).toBeFalsy();
    expect(dealerBust).toBeFalsy();
    expect(dealerUp).toHaveLength(0);
    expect(dealerDown).toHaveLength(0);
    expect(gameCount).toEqual(0);
  });

  it("checks for dealer blackjack", () => {
    dealerUp.push({ name: "Ace", value: 1 });
    checkDealerBlackjack();
    expect(dealerHandValue).toEqual(11);
  });
});
