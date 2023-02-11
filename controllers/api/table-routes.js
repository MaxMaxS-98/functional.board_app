const router = require('express').Router();
const { Playtable, Dealer, Player } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const dbTableData = await Playtable.findAll({
            include: [
                { model: Dealer },
                { model: Player }
            ],
        })
        const tables = dbTableData.map((table) =>
            table.get({ plain: true })
        );
        res.status(200).json(tables)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CREATE new table
router.post('/', async (req, res) => {
    try {
        const dbTableData = await Playtable.create(req.body);
        res.status(200).json({ dbTableData });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update table data
router.put('/:id', async (req, res) => {
    try {
        const updatedTable = await Playtable.update(
            req.body,
            {
                where: { id: req.params.id },
                returning: true
            });

        if (!updatedTable) {
            return res.status(400).json({ message: 'Table not found' });
        }
        const tables = dbTableData.map((table) =>
            table.get({ plain: true })
        );
        res.status(200).json(tables)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Delete table
router.delete('/:id', async (req, res) => {
    try {
        const deletedTable = await Playtable.destroy({
            where: { id: req.params.id }
        });

        if (!deletedTable) {
            return res.status(400).json({ message: 'Table not found' });
        }

        res.status(200).json({ message: 'Table deleted successfully' });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
