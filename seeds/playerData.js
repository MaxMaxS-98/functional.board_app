const { Player } = require('../models');

const playerData = [
  {
   id: 1,
   table_id: 1,
  },
  {
    id: 2,
    table_id: 1,
  },
  {
    id: 3,
    table_id: 1,
  },
  {
    id: 4,
    table_id: 1,
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;