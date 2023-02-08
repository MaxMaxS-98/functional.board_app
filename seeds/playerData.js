const { Player } = require('../models');

const playerData = [
  {
    user_id: 1,
    table_id: 1,
  },
  {
    user_id: 2,
    table_id: 1,
  },
  {
    user_id: 3,
    table_id: 1,
  },
  {
    user_id: 4,
    table_id: 1,
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;