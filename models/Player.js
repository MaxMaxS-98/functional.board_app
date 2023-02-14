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
        credit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1000
        },
        hand: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        split_hand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        // This shows the status of a player, for example: 'stand', 'split', 'double', 'busted', 'stand', etc.
        current_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'idle'
        },
        turn: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
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

module.exports = Player;
