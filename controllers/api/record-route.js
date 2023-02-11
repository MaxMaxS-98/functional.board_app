const router = require('express').Router();
const { Record } = require('../../models');
const withAuth = require('../../utils/auth');


// Get all records
app.get('/', async (req, res) => {
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
app.get('/:id', withAuth, async (req, res) => {
    try {
      const dbRecordData = await Record.findOne({
        where: { id: req.params.id }
      });
  
      if (!dbRecordData) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      const record = dbRecordData.get({ plain: true });
      res.status(200).json(record);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update a single record by ID
  app.put('/:id', withAuth, async (req, res) => {
    try {
      const updatedRecord = await Record.update(req.body, {
        where: { id: req.params.id },
        returning: true
      });
  
      if (!updatedRecord[0]) {
        return res.status(404).json({ message: 'Record not found' });
      }
  
      const record = updatedRecord[1][0].get({ plain: true });
      res.status(200).json({ message: 'Record updated successfully', record });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  

  module.exports = router;
