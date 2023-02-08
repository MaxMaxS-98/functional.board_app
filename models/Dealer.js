const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Dealer extends Model { }

Dealer.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'playtable',
            key: 'id',
          }
    },
    first_hand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    second_hand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    split_first_hand: {
        type: DataTypes.STRING,
        allowNull: true
    },
    split_second_hand: {
        type: DataTypes.STRING,
        allowNull: true
    },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dealer',
}
);

module.exports = Dealer