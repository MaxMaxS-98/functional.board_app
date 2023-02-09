const User = require('./User');
const Stats = require('./Stats');
const Player = require('./Player');

User.hasOne(Stats 
  ,{ foreignKey: 'player_id', sourceKey: 'user_id' }
  );

Player.hasMany(Stats, { as: 'stats', foreignKey: 'player_id' });
Stats.belongsTo(Player);
Player.belongsTo(User);




module.exports = { User, Stats, Player };