const prompt = require("prompt-sync")();

class Player {
    constructor() {
        this.hand = []
        this.money = 1000
        this.playAgain = false
        this.wager = 0
        this.score = 0
        this.hitOrStay = "y"
    }
    makeWager() {
        
        while (true) {
            this.wager = Number(prompt("How much do you want to bet? "));
            if (isNaN(this.wager)) {
                console.log(`Please enter a digit less than less than ${this.money}`)
            } else if (this.wager > this.money) {
                console.log(`Please enter a digit less than less than ${this.money}`)
                continue
            } else {
                break
            }
        }
        // wait 2 seconds
        setTimeout(() => {}, 2000)
        console.log(`Player bet ${this.wager}.`)
        this.money -= this.wager
    }

    stay() {
        setTimeout(() => {}, 2000)
    }

    hit(deck) {
        if (this.hand.length >= 2) {
            while (true) {
                this.hitOrStay = prompt("Do you want to hit (y/n)? ")
                if (this.hitOrStay === "y") {
                    console.log("Player is dealt a card...")
                    let newCard = deck.pop()
                    this.addCardValue(newCard)
                    console.log(`Player was dealt a ${newCard}. Player score is now ${this.score}.`)
                    this.hand.push(newCard)
                } else if (this.hitOrStay !== "y" && this.hitOrStay !== "n") {
                    console.log("Please enter 'y' or 'n'")
                    continue
                } else {
                    break
                }
                setTimeout(() => {}, 2000)
            }

        } else {
            console.log("Player is dealt a card...")
            setTimeout(() => {}, 2000)
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
        console.log("The players hand is the following: ")
        setTimeout(() => {}, 2000)
        console.log(this.hand)
    }

    reset() {
        this.hand = []
        this.hitOrStay = "y"
        this.score = 0
    }

    addCardValue(card) {
        let cardRank = card.split(" ")[0]
        if (parseInt(cardRank) <= 10) {
            this.score += parseInt(cardRank)
        } else if (cardRank === 'Ace') {
            setTimeout(() => {}, 2000)
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
module.exports = Player;
