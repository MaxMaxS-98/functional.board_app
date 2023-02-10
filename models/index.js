const Record = require('./Record');
const Playtable = require('./Playtable');
const Player = require('./player');
const Dealer = require('./dealer');
const User = require('./User')

// Table has many players
Playtable.hasMany(Player,
  {
    foreignKey: 'table_id',
    onDelete: 'CASCADE',
  }
);

// Player belongs to one table
Player.belongsTo(Playtable,
  {
    foreignKey: 'table_id',
    onDelete: 'CASCADE',
  }
);

// Table has one dealer
Playtable.hasOne(Dealer,
  { foreignKey: 'id' }
);

// Dealer belongs to one table
Dealer.belongsTo(Playtable,
  { foreignKey: 'id' }
);

// User is one player
// User.hasOne(Player,
//   { foreignKey: 'player_name' }
// );

// Player.belongsTo(User,
//   { foreignKey: 'player_name' }
// );
// // User has one record
// User.hasOne(Record,
//   { foreignKey: 'username' }
// );
// // record belongs to one user
// Record.belongsTo(User,
//   { foreignKey: 'username' }
// );



module.exports = { User, Record, Playtable, Player, Dealer };

