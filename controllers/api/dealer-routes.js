const router = require('express').Router();
const { Dealer } = require('../../models');

// // Get all Dealer
// router.get('/', async (req, res) => {
//     try {
//         const allDealers = await Dealer.findAll();
//         res.status(200).json({ allDealers });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// Get a single Dealer
router.get('/:user_id', async (req, res) => {
    try {
        const dealer = await Dealer.findOne(
            { where: { user_id: req.params.user_id } }
        );
        if (!dealer) {
            return res.status(400).json({ message: 'Dealer not found' });
        }
        res.status(200).json({ dealer });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update a Dealer
router.put('/:user_id', async (req, res) => {
    try {
        // Validate incoming data
        const dealer = await Dealer.update(
            req.body,
            { where: { user_id: req.params.user_id } },
            { new: true }
        );
        if (!dealer) {
            return res.status(400).json({ message: 'Dealer not found' });
        }
        res.status(200).json({ dealer });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete a Dealer
router.delete('/:user_id', async (req, res) => {
    try {
        const dealer = await Dealer.destroy({
            where: { user_id: req.params.user_id }
        });
        if (!dealer) {
            return res.status(400).json({ message: 'Dealer not found' });
        }
        res.status(200).json(dealer.hand);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
