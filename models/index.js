const User = require('./User');
const Stats = require('./Stats');

User.hasOne(Stats);

Stats.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Stats };