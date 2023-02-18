
const path = require('path');
const router = require('express').Router();
const { Playtable, Dealer, Player } = require('../models')


// const { User } = require('../models');
// const withAuth = require('../utils/auth')
// GET homepage
router.get('/', async (req, res) => {
    try {
        const dbGameData = await Playtable.findAll({
            include: [
                { model: Dealer,
                    attributes: ['hand']
                },
                { model: Player,
                    attributes: ['id', 'credit', 'hand']
                }
            ],
            attributes: ['cards']
        })
        const plainGameData = dbGameData.map((table) =>
            table.get({ plain: true })
        );
        res.render('game',
            {
                plainGameData,
                loggedIn: req.session.loggedIn
            })

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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
  


module.exports = router;
