const { Player } = require('../models');

const playerData = [
  {
   id: 1,
   current_table: 1,
  },
  {
    id: 2,
    current_table: 1,
  },
  {
    id: 3,
    current_table: 1,
  },
  {
    id: 4,
    current_table: 1,
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;