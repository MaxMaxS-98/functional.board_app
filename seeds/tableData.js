const { Playtable } = require('../models');

// const tableData = [
//   {
//     id: 1,
//   }
// ];

const seedTables = async () => {
  const newTable = await Playtable.create({
  id: 1,
  is_active: true
});
}

module.exports = seedTables;