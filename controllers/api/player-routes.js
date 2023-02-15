const router = require('express').Router();
const { Player } = require('../../models');
// const withAuth = require('../../utils/auth');

// Get all players
router.get('/', async (req, res) => {
    try {
        const allPlayers = await Player.findAll();
        const players = allPlayers.map((player) =>
            players.get({ plain: true })
        );
        res.status(200).json(players)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get a single player
router.get('/:user_id', async (req, res) => {
    try {
        const player = await Player.findOne(
            { where: { user_id: req.params.user_id } }
        );
        if (!player) {
            return res.status(400).json({ message: 'Player not found' });
        }
        res.status(200).json(player.get({ plain: true }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update a player
router.put('/:user_id', async (req, res) => {
    try {
        // Validate incoming data
        const player = await Player.update(
            req.body,
            { 
                where: { user_id: req.params.user_id},
                returning: true 
            }
        );
        const updatedPlayer = await Player.findOne({
            where: { id: req.params.user_id }
          });
        if (!updatedPlayer) {
            return res.status(400).json({ message: 'Player not found' });
        }
        res.status(200).json(updatedPlayer.get({ plain: true }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete a player
router.delete('/:user_id', async (req, res) => {
    try {
        const player = await Player.destroy({
            where: { user_id: req.params.user_id }
        });
        if (!player) {
            return res.status(400).json({ message: 'Player not found' });
        }
        res.status(200).json(player.get({ plain: true }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
