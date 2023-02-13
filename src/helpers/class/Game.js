const path = require("path");
const Deck = require(path.join(__dirname, "../helpers/class/Deck"));
const delay = require(path.join(__dirname, "../helpers/delayScript"));

class Game {
    constructor() {
      this.draw = new Deck();
      this.playerHand = [];
      this.dealerHand = [];
      this.dealerUp = [];
      this.playerBet = 25;
      this.playerTotal = 0;
      this.dealerTotal = 0;
      this.playerBank = 1000;
      this.playerBust = false;
      this.dealerBust = false;
    }
    async drawCard() {
        const card = await this.draw.drawCard();
        console.log(card.name, card.suit, card.value);
        return card;
    }
    async start() {
        console.log("Starting a new game of Blackjack...\n");
    
        // Deduct player's bet from bank
        this.playerBank -= this.playerBet;
        console.log("You bet " + this.playerBet + ".");
        console.log("Your credits are now " + this.playerBank + ".\n");
    
        // Deal initial hands to player and dealer
        this.playerHand.push(await this.drawCard());
        this.dealerHand.push(await this.drawCard());
        this.playerHand.push(await this.drawCard());
        this.dealerHand.push(await this.drawCard());
    
        // Show player's initial hand
        console.log("Your hand: " + this.playerHand.map((card) => card.name).join(", "));
        this.playerTotal = this.playerHand.reduce((sum, card) => sum + card.value, 0);
        console.log("Your total: " + this.playerTotal + "\n");
    
        // Show one of the dealer's cards face up
        this.dealerUp.push(this.dealerHand[1]);
        console.log("Dealer's face up card: " + this.dealerUp[0].name + " of " + this.dealerUp[0].suit + "\n");
    
        // Player's turn hit until 17 or bust
        while (this.playerTotal < 17) {
          console.log("\nYou choose to hit.");
          await delay(2);
          await this.playerHand.push(await this.drawCard());
          console.log("Your hand: " + this.playerHand.map((card) => card.name).join(", "));
          this.playerTotal = this.playerHand.reduce((sum, card) => sum + card.value, 0);
          console.log("Your total: " + this.playerTotal);
          if (this.playerTotal > 21) {
            this.playerBust = true;
            console.log("\nPlayer busts! You went over 21.");
            console.log(this.playerBank + "-----test-----");
            break;
          }
        }
    
        // Check if player busts
        if (this.playerBust) {console.log("\nYou lost $" + this.playerBet + ". Your remaining bank is $" + this.playerBank + ".");
    } else {
    // Show dealer's second card face up
    console.log("\nDealer's face up card: " + this.dealerUp[0].name);
    console.log("\nDealer's hand: " + this.dealerUp.concat(this.dealerDown).join(", "));

    this.dealerTotal = this.draw.handValue(this.dealerHand);

    console.log("Dealer's total: " + this.dealerTotal + "\n");

    // Dealer's turn
    while (this.dealerTotal < 17) {
      console.log("Dealer hits.");

      this.dealerHand.push(await this.draw.drawCard());
      console.log("Dealer's hand: " + this.dealerHand.map(card => card.name).join(", "));

      this.dealerTotal = this.draw.handValue(this.dealerHand);
      console.log("Dealer's total: " + this.dealerTotal);

      if (this.dealerTotal > 21) {
        this.dealerBust = true;
        console.log("\nDealer busts! You win.");

        this.playerBank += 2 * this.playerBet;
        console.log("You won $" + 2 * this.playerBet + ". Your remaining bank is $" + this.playerBank + ".");
        break;
      }
    }

    // Compare player and dealer totals
    console.log("\nFinal results:");
    console.log("Your total: " + this.playerTotal);
    console.log("Dealer's total: " + this.dealerTotal);
    if (this.playerTotal > this.dealerTotal) {
      console.log("\nYou win!");
      this.playerBank += 2 * this.playerBet;
      console.log("You won $" + 2 * this.playerBet + ". Your remaining bank is $" + this.playerBank + ".");
    } else if (this.playerTotal < this.dealerTotal) {
      console.log("\nYou lose.");
      console.log("You lost $" + this.playerBet + ". Your remaining bank is $" + this.playerBank + ".");
    } else {
      console.log("\nPush.");
      this.playerBank += this.playerBet;
      console.log("You won $" + this.playerBet + ". Your remaining bank is $" + this.playerBank + ".");
    }
  }
}
}

const game = new Game();
game.startGame();

module.exports = Game;