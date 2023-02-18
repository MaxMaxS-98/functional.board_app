const express = require('express');
const Playtable = require('./models/Playtable');

const app = express();
app.get('/game/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
  
    // Find the game by ID
    const game = await Playtable.findByPk(gameId);
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
  
    // Return the game state to the client
    res.json({
      is_active: game.is_active,
      player_cards: JSON.parse(game.player_cards),
      dealer_cards: JSON.parse(game.dealer_cards),
      winner: game.winner,
    });
  });
// Middleware to parse JSON requests
app.use(express.json());

// Start a new game
app.post('/game', async (req, res) => {
  // Create a new record for a new game
  const game = await Playtable.create({
    is_active: true,
    opts: 'new game',
    cards: JSON.stringify(require("./activeShoe.json")),
    player_cards: null,
    dealer_cards: null,
    winner: null,
  });

  // Draw two cards for the player and two cards for the dealer
  const playerCards = drawCards(game, 2);
  const dealerCards = drawCards(game, 2);

  // Save the player and dealer cards to the database
  game.player_cards = JSON.stringify(playerCards);
  game.dealer_cards = JSON.stringify(dealerCards);
  await game.save();

  // Return the game ID and the player's cards to the client
  res.json({ game_id: game.id, player_cards: playerCards });
});

// Hit the player with another card
app.post('/game/:gameId/hit', async (req, res) => {
  const gameId = req.params.gameId;

  // Find the game by ID
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }

  // Check if the game is still active
  if (!game.is_active) {
    return res.status(400).json({ error: 'Game is already over' });
  }

  // Draw a new card for the player and add it to their hand
  const playerCards = JSON.parse(game.player_cards);
  const newCard = drawCards(game, 1)[0];
  playerCards.push(newCard);

  // Update the player's hand in the database
  game.player_cards = JSON.stringify(playerCards);
  await game.save();

  // Check if the player has gone over 21 (busted)
  const playerTotal = calculateHandValue(playerCards);
  if (playerTotal > 21) {
    // End the game and declare the dealer the winner
    game.is_active = false;
    game.winner = 'dealer';
    await game.save();
    return res.json({ message: 'Player busts! Dealer wins.', winner: game.winner });
  }

  // Return the new player cards to the client
  res.json({ player_cards: playerCards });
});

// Stand and let the dealer play
app.post('/game/:gameId/stand', async (req, res) => {
  const gameId = req.params.gameId;

  // Find the game by ID
  const game = await Playtable.findByPk(gameId);
  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }

  // Check if the game is still active
  if (!game.is_active) {
    return res.status(400).json({ error: 'Game is already over' });
  }

  // Reveal the dealer's face-down card
  const dealerCards = JSON.parse(game.dealer_cards);
  dealerCards[0].side = 'front';

  // Draw cards for the dealer until they have at least 17 points
  while (calculateHandValue(dealerCards) < 17) {
    dealerCards.push(drawCards(game, 1)[0]);
  }

  // Update the dealer's    
    game.dealer_cards = JSON.stringify(dealerCards);
    await game.save();

    // Check if the dealer has gone over 21 (busted)
    const dealerTotal = calculateHandValue(dealerCards);
    if (dealerTotal > 21) {
        // End the game and declare the player the winner
        game.is_active = false;
        game.winner = 'player';
        await game.save();
        return res.json({ message: 'Dealer busts! Player wins.', winner: game.winner });
        }

        // Compare the player's and dealer's hands to determine the winner
        const playerCards = JSON.parse(game.player_cards);
        const playerTotal = calculateHandValue(playerCards);
        if (playerTotal > dealerTotal) {
            // End the game and declare the player the winner
            game.is_active = false;
            game.winner = 'player';
            await game.save();
            return res.json({ message: 'Player wins.', winner: game.winner });  
        }
        else if (playerTotal < dealerTotal) {
            // End the game and declare the dealer the winner
            game.is_active = false;
            game.winner = 'dealer';
            await game.save();
            return res.json({ message: 'Dealer wins.', winner: game.winner });
        }
        else {
            // End the game and declare it a tie
            game.is_active = false;
            game.winner = 'tie';
            await game.save();
            return res.json({ message: 'Tie game.', winner: game.winner });
        }   
    });

    