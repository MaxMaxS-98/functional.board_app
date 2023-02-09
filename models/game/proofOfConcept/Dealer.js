class Dealer {
    constructor() {
        this.hand = []
        this.score = 0
    }

    hit(deck) {
        if (this.hand.length >= 2) {
            console.log("Dealer is dealt a card...")
            let newCard = deck.pop()
            this.addCardValue(newCard)
            console.log(`Dealer was dealt a ${newCard}. Dealer score is now ${this.score}.`)
            this.hand.push(newCard)
        } else {
            console.log("Dealer is dealt a card...")
            let newCard = deck.pop()
            this.addCardValue(newCard)
            this.hand.push(newCard)
        }
    }
    dealOpeningHand(deck) {
        this.hit(deck)
        this.hit(deck)
    }

    showHand() {
        console.log("The dealer is showing the following 1 card: ")
        console.log(this.hand[0])
    }

    showFullHand() {
        console.log("The dealer is showing the following: ")
        console.log(this.hand)
    }

    reset() {
        this.hand = []
        this.score = 0
    }

    addCardValue(card) {
        let cardRank = card.split(" ")[0]
        if (parseInt(cardRank) <= 10) {
            this.score += parseInt(cardRank)
        } else if (cardRank === 'Ace') {
            if (this.score + 11 < 21) {
                this.score += 11

            } else {
                this.score += 1

            }
        } else {
            this.score += 10
        }
    }
}
module.exports = Dealer;