const Record = require('./Record');
const Playtable = require('./Playtable');
const Player = require('./Player');
// const Dealer = require('./Dealer');
const User = require('./User')

// Table has many players
Playtable.hasMany(Player,
  {
    foreignKey: 'table_id',
    onDelete: 'CASCADE'
  }
);
// Player belongs to one table
Player.belongsTo(Playtable);

// Table has one dealer
// Playtable.hasOne(Dealer,
//   {
//     foreignKey: 'table_id',
//     onDelete: 'CASCADE'
//   }
// );
// // Dealer belongs to one table
// Dealer.belongsTo(Playtable);


// User is a player
User.hasOne(Player,
  
);
Player.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// User has one record
User.hasOne(Record,
  
);
// record belongs to one user
Record.belongsTo(User,{
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



module.exports = {
  User,
  Record,
  Playtable,
  Player
  // Dealer
};

