const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Record extends Model { }

Record.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        username: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'username',
            }
        },
        games_won: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        games_played: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        max_profit: {
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
        modelName: 'record',
    }
);

module.exports = Record