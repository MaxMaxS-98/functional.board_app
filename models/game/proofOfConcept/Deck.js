// Deck

class Deck {
    constructor() {
        this.suits = ["Diamonds", "Clubs", "Hearts", "Spades"]
        this.ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]
    }

    makeDeck() {
        let deck = [];

        for (let i = 0; i < this.suits.length; i++) {
            for (let rank = 0; rank < this.ranks.length; rank++) {
                deck.push(`${this.ranks[rank]} of ${this.suits[i]}`)
            }
        }
        deck = this.shuffle(deck)
        return deck;
    }

    shuffle(deck) {
        // 2 seconds
        setTimeout(() => {
        }, 2000);
        console.log("shuffling deck")
        let m = deck.length
        let i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return deck
    }
}

module.exports = Deck;