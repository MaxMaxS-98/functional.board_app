const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playtable extends Model {}

Playtable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    opts: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cards: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hit_cards: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    stand_cards: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playtable',
  }
);

module.exports = Playtable;
