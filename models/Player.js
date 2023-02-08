const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model { }

Player.init(
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
            model: 'table',
            key: 'id',
          }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'user_id',
          }
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000
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
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'player',
}
);

module.exports = Player