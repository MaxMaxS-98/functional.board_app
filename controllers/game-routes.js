const express = require("express");
const router = express.Router();
const Playtable = require("../models/Playtable");
// Load the activeShoe from the JSON file
const activeShoeData = require("../models/game/activeShoe.json");
const activeShoe = activeShoeData;
console.log("Game routes loaded");
// functions
  
function drawCards(deck, numCards) {
    const drawnCards = [];
    for (let i = 0; i < numCards; i++) {
      const r= Math.floor(Math.random() * deck.length);
      const drawnCard = deck.splice(r, 1)[0];
      drawnCards.push(drawnCard);
    }
    return drawnCards;
  }

  function calculateHandValue(cards) {
    let total = 0;
    let aces = 0;
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      if (card.value === "A") {
        aces++;
      } else if (card.value === "J" || card.value === "Q" || card.value === "K") {
        total += 10;
      } else {
        total += parseInt(card.value, 10);
      }
    }
    for (let i = 0; i < aces; i++) {
      if (total + 11 > 21) {
        total += 1;
      } else {
        total += 11;
      }
    }
    return total;
  }
  

// parse json requests
router.use(express.json());

// Start a new game
router.post("/", async (req, res) => {
    // Parse activeShoe.json as an array of objects
    const deck = activeShoe;
  
    // Create a new record for a new game
    const game = await Playtable.create({
      is_active: true,
      opts: "new game",
      cards: JSON.stringify(deck),
      player_cards: null,
      dealer_cards: null,
      winner: null,
    });
  
    // Call startNewGame after game is initialized
    startNewGame(req, res, deck, game);
  });
  
  async function startNewGame(req, res, deck, game) {
    // Draw two cards for the player and two cards for the dealer
    const playerCards = drawCards(deck, 2);
    const dealerCards = drawCards(deck, 2);
  
    // Save the player and dealer cards to the database
    game.player_cards = JSON.stringify(playerCards);
    game.dealer_cards = JSON.stringify(dealerCards);
    await game.save();
  
    // Return the game ID and the player's cards to the client
    res.json({ game_id: game.id, player_cards: playerCards });
  }

// Hit the player with another card
router.post("/game/:gameId/hit", async (req, res) => {
  const gameId = req.params.gameId;

  // Find the game by ID
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // Check if the game is still active
  if (!game.is_active) {
    return res.status(400).json({ error: "Game is already over" });
  }

  // Draw a new card for the player and add it to their hand
  const playerCards = JSON.parse(game.player_cards);
  const newCard = drawCards(activeShoe, 1)[0];
  playerCards.push(newCard);

  // Update the player's hand in the database
  game.player_cards = JSON.stringify(playerCards);
  await game.save();

  // Check if the player has gone over 21 (busted)
  const playerTotal = calculateHandValue(playerCards);
  if (playerTotal > 21) {
    // End the game and declare the dealer the winner
    game.is_active = false;
    game.winner = "dealer";
    await game.save();
    return res.json({
      message: "Player busts! Dealer wins.",
      winner: game.winner,
    });
  }

  // Return the new player cards to the client
  res.json({ player_cards: playerCards });
});

// Stand and let the dealer play
router.post("/game/:gameId/stand", async (req, res) => {
  const gameId = req.params.gameId;

  // Find the game by ID
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // Check if the game is still active
  if (!game.is_active) {
    return res.status(400).json({ error: "Game is already over" });
  }

  // Reveal the dealer's face-down card
  const dealerCards = JSON.parse(game.dealer_cards);
  dealerCards[0].side = "front";

  // Draw cards for the dealer until they have at least 17 points
  while (calculateHandValue(dealerCards) < 17) {
    dealerCards.push(drawCards(game, 1)[0]);
  }

  // Update the dealer's hand in the database
  game.dealer_cards = JSON.stringify(dealerCards);
  await game.save();

  // Check if the dealer has gone over 21 (busted)
  const dealerTotal = calculateHandValue(dealerCards);
  if (dealerTotal > 21) {
    // End the game and declare the player the winner
    game.is_active = false;
    game.winner = "player";
    await game.save();
    return res.json({
      message: "Dealer busts! Player wins.",
      winner: game.winner,
    });
  }

  // Compare the player's and dealer's hands to determine the winner
  const playerCards = JSON.parse(game.player_cards);
  const playerTotal = calculateHandValue(playerCards);
  if (playerTotal > dealerTotal) {
    // End the game and declare the player the winner
    game.is_active = false;
    game.winner = "player";
    await game.save();
    return res.json({ message: "Player wins.", winner: game.winner });
  } else if (playerTotal < dealerTotal) {
    // End the game and declare the dealer the winner
    game.is_active = false;
    game.winner = "dealer";
    await game.save();
    return res.json({ message: "Dealer wins.", winner: game.winner });
  } else {
    // End the game and declare it a tie
    game.is_active = false;
    game.winner = "tie";
    await game.save();
    return res.json({ message: "Tie game.", winner: game.winner });
  }
});

router.put("/game/:gameId/restart", async (req, res) => {
  const gameId = req.params.gameId;
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  const activeShoe = require("./activeShoe.json");
  game.cards = JSON.stringify(activeShoe);
  game.is_active = true;
  game.player_cards = null;
  game.dealer_cards = null;
  game.winner = null;
  await game.save();
  res.json({ message: "Game restarted successfully." });
});

router.put("/game/:gameId/end", async (req, res) => {
  const gameId = req.params.gameId;
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }
  game.is_active = false;
  game.winner = "dealer";
  await game.save();
  res.json({ message: "Game ended successfully." });
});

router.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

module.exports = router;
