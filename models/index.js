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
User.hasOne(Player,
  { foreignKey: 'id' }
);

Player.belongsTo(User,
  { foreignKey: 'id' }
);
// User has one record
User.hasOne(Record,
  { foreignKey: 'id' }
);
// record belongs to one user
Record.belongsTo(User,
  { foreignKey: 'id' }
);



module.exports = { User, Record, Playtable, Player, Dealer };

