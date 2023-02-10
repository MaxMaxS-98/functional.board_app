const { Player } = require('../models');

const playerData = [
  {
   id: 1,
   table_id: 1,
   player_name: 'Jane123'
  },
  {
    id: 2,
    table_id: 1,
    player_name: 'Jack456'
  },
  {
    id: 3,
    table_id: 1,
    player_name: 'John789'
  },
  {
    id: 4,
    table_id: 1,
    player_name: 'Jim01234567'
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;