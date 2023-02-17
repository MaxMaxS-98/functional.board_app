
const path = require('path');
const router = require('express').Router();
const { Playtable, Dealer, Player } = require('../models')

// const { User } = require('../models');
// const withAuth = require('../utils/auth')
// GET homepage
router.get('/game', async (req, res) => {
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

router.get('/start', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/start-game.html"));

      
});



module.exports = router;
