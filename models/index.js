const User = require('./User');
const Record = require('./Record');
const Playtable = require('./Playtable');
const Player = require('./player');
const Dealer = require('./dealer');

// Table has many players
Playtable.hasMany(Player,
  { foreignKey: 'id',
  onDelete: 'CASCADE', }
);

// Player belongs to one table
Player.belongsTo(Playtable,
  { foreignKey: 'id',
  onDelete: 'CASCADE', }
);

// Table has one dealer
Playtable.hasOne(Dealer,
  { foreignKey: 'id' }
);

// Dealer belongs to one table
Dealer.belongsTo(Playtable,
  { foreignKey: 'id' }
);

// Player has one user
Player.hasOne(User,
  { foreignKey: 'id' }
);

User.belongsTo(Player,
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