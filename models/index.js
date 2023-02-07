const User = require('./User');
const Stats = require('./Stats');

User.hasOne(Stats 
  ,{ foreignKey: 'player_id', sourceKey: 'user_id' }
  );

Stats.belongsTo(User);

module.exports = { User, Stats };