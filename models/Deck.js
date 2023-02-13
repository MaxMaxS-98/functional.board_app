const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model { }
const Deck = sequelize.define('Deck', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cardName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cardValue: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
    cardSuit: {
    type: Sequelize.STRING,

},
    cardImagePath: {
    type: Sequelize.STRING,
    allowNull: false,
    },

}
);

sequelize.sync();

module.exports = Deck;
