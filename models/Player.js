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
                model: 'playtable',
                key: 'id',
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
        },
        // This shows the status of a player, for example: 'stand', 'split', 'double', 'busted', 'stand', etc.
        current_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'idle'
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
