const router = require('express').Router();
const { Playtable, Dealer, Player } = require('../../models');

// get all tables
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
        res.status(500).json(err);
    }
});
// Get table by id
router.get('/:id', async (req, res) => {
    try {
        const dbTableData = await Playtable.findByPk(req.params.id);

        if (!dbTableData) {
            return res.status(400).json({ message: 'Table not found' });
        }

        res.status(200).json(dbTableData.get({ plain: true }))

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// CREATE new table
router.post('/', async (req, res) => {
    try {
        const dbTableData = await Playtable.create(req.body);
        res.status(200).json(dbTableData.get({ plain: true }));
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Update table data
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body)
        const updatedTable = await Playtable.update(
            req.body,
            {
                where: { id: req.params.id },
                returning: true
            });

        const updatedRow = await Playtable.findOne({
            where: { id: req.params.id }
        });
        if (updatedTable === 0 || !updatedRow) {
            return res.status(400).json({ message: 'Table not found' });
        }
        res.status(200).json(updatedRow.get({ plain: true }))
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
