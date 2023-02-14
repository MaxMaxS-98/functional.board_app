const router = require('express').Router();
const { Dealer } = require('../../models');

// Get all Dealers
router.get('/', async (req, res) => {
    try {
        const allDealers = await Dealer.findAll();
        const dealers = allDealers.map((player) =>
            dealers.get({ plain: true })
        );
        res.status(200).json(dealers)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get a single Dealer
router.get('/:id', async (req, res) => {
    try {
        const dealer = await Dealer.findOne(
            { where: { id: req.params.id } }
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
router.put('/:id', async (req, res) => {
    try {
        // Validate incoming data
        const dealer = await Dealer.update(
            req.body,
            { where: { id: req.params.id },
              new: true 
            }
        );
        const updatedDealer = await Dealer.findOne({
            where: { id: req.params.id }
          });
        if (!updatedDealer) {
            return res.status(400).json({ message: 'Dealer not found' });
        }
        res.status(200).json(updatedDealer.get({ plain: true }))
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete a Dealer
router.delete('/:id', async (req, res) => {
    try {
        const dealer = await Dealer.destroy({
            where: { id: req.params.id }
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
