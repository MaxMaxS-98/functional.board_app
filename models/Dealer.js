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
        // table_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: 'playtable',
        //         key: 'id',
        //     }
        // },
        hand: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // This shows the status of a dealer, for example: 'stand', 'split', 'double', 'busted', 'stand', etc.
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
        modelName: 'dealer',
    }
);

module.exports = Dealer