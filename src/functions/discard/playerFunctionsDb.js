//playerFunctionsDb.js
// Methods to communicate with the database for player functions

const { Player } = require('../../../models');
// define the Player model
// const playerAction  = sequelize.define('playerAction', {

//     hand: {
//         type: Sequelize.JSON,
//         allowNull: false,
//     },
//     bet: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//     },
    

// });
// playerAction.prototype.hit = function () {
//     //use the hit function from playerFunctions.js
//     this.hand = hit(this.hand);
//     this.save();
//     return this.hand;
// };

// add a method to the player model to handle stand
Player.prototype.stand = function () {
    //use the stand function from playerFunctions.js
    this.hand = stand(this.hand);
    this.save();
    return this.hand;
};

// add a method to the player model to handle double

module.exports = playerFunctionsDb;