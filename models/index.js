const User = require('./User');
const Record = require('./Record');

User.hasOne(Record 
  ,{ foreignKey: 'player_id', sourceKey: 'user_id' }
  );

Record.belongsTo(User);

module.exports = { User, Record };