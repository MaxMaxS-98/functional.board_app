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
    
        hand: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // This shows the status of a dealer, for example: 'stand', 'split', 'double', 'busted', 'stand', etc.
        current_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'idle'
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
        modelName: 'dealer',
    }
);

module.exports = Dealer