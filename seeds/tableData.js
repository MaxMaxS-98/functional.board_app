const { Playtable } = require('../models');

const newTable = [{
  id: 1,
  is_active: true
}]

const seedTables = () => Playtable.bulkCreate(newTable);
  


module.exports = seedTables;