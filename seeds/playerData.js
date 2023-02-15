const { Player } = require('../models');

const playerData = [
  {
   user_id: 1,
   table_id: 1,
  //  player_name: 'Jane123'
  },
  {
    user_id: 2,
    table_id: 1,
    // player_name: 'Jack456'
  },
  {
    user_id: 3,
    table_id: 1,
    // player_name: 'John789'
  },
  {
    user_id: 4,
    table_id: 1,
    // player_name: 'Jim01234567'
  },
];

const seedPlayers = () => Player.bulkCreate(playerData);

module.exports = seedPlayers;