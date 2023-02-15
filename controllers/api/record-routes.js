const router = require('express').Router();
const { Record } = require('../../models');
// const withAuth = require('../../utils/auth');


// Get all records
router.get('/', async (req, res) => {
    try {
        const dbRecordData = await Record.findAll()

        const records = dbRecordData.map((record) =>
            record.get({ plain: true })
        );
        res.status(200).json(records)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single record by ID
router.get('/:id', async (req, res) => {
    try {
        const dbRecordData = await Record.findOne({
            where: { id: req.params.id }
        });

        if (!dbRecordData) {
            return res.status(404).json({ message: 'Record not found' });
        }

        res.status(200).json(dbRecordData.get({ plain: true }));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a single record by ID
router.put('/:id', async (req, res) => {
    try {
        const updateRecord = await Record.update(req.body, {
            where: { id: req.params.id },
            returning: true
        });

        const updatedRecord = await Record.findOne({
          where: { id: req.params.id }
        });
      if (!updatedRecord) {
          return res.status(400).json({ message: 'Record not found' });
      }
      res.status(200).json(updatedRecord.get({ plain: true }))
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new record
router.post('/', async (req, res) => {
  try {
    const dbRecordData = await Record.create(req.body);
    res.status(200).json(dbRecordData.get({ plain: true }));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a single record by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedRecord = await Record.destroy({
      where: { id: req.params.id }
    });

    if (!deletedRecord) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
