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
Player.belongsTo(Playtable);

// Table has one dealer
Playtable.hasOne(Dealer,
  { foreignKey: 'table_id' }
);
// Dealer belongs to one table
Dealer.belongsTo(Playtable);


// User is a player
User.hasOne(Player,
  { foreignKey: 'user_id' }
);
Player.belongsTo(User);


// User has one record
User.hasOne(Record,
  { foreignKey: 'user_id' }
);
// record belongs to one user
Record.belongsTo(User);



module.exports = { User, 
  Record, 
  Playtable, 
  Player, 
  Dealer 
};

