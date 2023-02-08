const { Table } = require('../models');

const tableData = [
  {
    id: 1,
    players:
    dealer:
  },
];

const seedTables = () => Table.bulkCreate(tableData);

module.exports = seedTables;