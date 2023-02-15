
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
                { model: Dealer },
                { model: Player }
            ]
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



module.exports = router;
