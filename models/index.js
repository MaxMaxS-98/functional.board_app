const User = require('./User');
const Record = require('./Record');
const Table = require('./table');
const Player = require('./player');
const Dealer = require('./dealer');

// Table has many players
Table.hasMany(Player, { foreignKey: 'table_id' });

// Player belongs to one table
Player.belongsTo(Table, { foreignKey: 'table_id' });

// Table has one dealer
Table.hasOne(Dealer, { foreignKey: 'table_id' });

// Dealer belongs to one table
Dealer.belongsTo(Table, { foreignKey: 'table_id' });

// User has one record
User.hasOne(Record 
  ,{ foreignKey: 'player_id', sourceKey: 'user_id' }
  );
// record belongs to one user
Record.belongsTo(User);

module.exports = { User, Record, Table};