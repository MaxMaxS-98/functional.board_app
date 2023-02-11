const router = require('express').Router();
const { Player } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all players
router.get('/', async (req, res) => {
    try {
        const allPlayers = await Player.findAll();
        res.status(200).json({ allPlayers });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get a single player
router.get('/:user_id', withAuth, async (req, res) => {
    try {
        const player = await Player.findOne(
            { where: { user_id: req.params.user_id } }
        );
        if (!player) {
            return res.status(400).json({ message: 'Player not found' });
        }
        res.status(200).json({ player });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update a player
router.put('/:user_id', withAuth, async (req, res) => {
    try {
        // Validate incoming data
        const player = await Player.update(
            req.body,
            { where: { user_id: req.params.user_id } },
            { new: true }
        );
        if (!player) {
            return res.status(400).json({ message: 'Player not found' });
        }
        res.status(200).json({ player });
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
        res.status(200).json({ player });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
