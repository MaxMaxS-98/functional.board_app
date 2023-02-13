class Game {
  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }

  start() {
    this.player.draw(this.deck);
    this.dealer.draw(this.deck);
    this.player.draw(this.deck);
    this.dealer.draw(this.deck);
  }

  playerHit() {
    this.player.draw(this.deck);
  }

  playerStand() {
    this.dealer.draw(this.deck);
  }
}