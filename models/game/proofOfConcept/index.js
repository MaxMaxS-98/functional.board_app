
const Deck = require("./deck")
const Player = require("./player")
const Dealer = require("./dealer")



function playGame() {
    // wait 2 seconds
 
    // Create deck of cards
    let deckObject = new Deck()
    let gameDeck = deckObject.makeDeck()

    // Create player & dealer
    let player = new Player()
    let dealer = new Dealer()
    timeout(2000)
    console.log(` You currently have ${player.money}.`)

    while (player.money > 0) {
        // Player needs to bet
        player.makeWager()

        // Deal the cards
        console.log("Dealing the players cards...")
        player.dealOpeningHand(gameDeck)
        if (player.score == 21) {
            console.log("Blackjack!")
            timeout(2000)
            console.log("You win.")
            player.money += player.wager * 2
            console.log(`Player has $${player.money}.`)
            player.reset()
            dealer.reset()
            continue
        }
        player.showHand()

        console.log("Dealing the dealers cards...")
        dealer.dealOpeningHand(gameDeck)
        dealer.showHand()

        while (player.hitOrStay === "y") {
            player.hit(gameDeck)

            if (player.score > 21) {
                timeout(2000)
                
                console.log("BUST...")
                timeout(2000)
                
                console.log(`You have ${player.money} left.`)
                break
            }
        }

        if (player.score > 21) {
            player.reset()
            dealer.reset()
            continue
        }
        console.log(`Player stays with a score of ${player.score}.`)
        timeout(2000)
        console.log("Dealers Turn!")
        timeout(2000)

        console.log("Here comes the dealers Big Reveal!")
        timeout(2000)
        dealer.showFullHand()

        while (dealer.score < 17) {
            dealer.hit(gameDeck)
        }
        if (dealer.score > 21) {
            timeout(2000)
            console.log("Dealer Busts")
            timeout(1000)
            console.log("You win.")
            
            player.money += player.wager * 2
            console.log(`Player has $${player.money}.`)
            timeout(1000)
            
            player.reset()
            dealer.reset()
            continue
        }
        if (player.score > dealer.score) {
            console.log("You win!")

            timeout(2000)
            
            player.money += player.wager * 2
            console.log(`Player now has $${player.money}.`)
            timeout(2000)
        } else {
            console.log("Dealer Wins!")
            timeout(2000)
            console.log(`Player now has $${player.money}.`)
            timeout(2000)

        }

        player.reset()
        dealer.reset()

    }
}
console.log("Blackjack Test Console");

playGame()