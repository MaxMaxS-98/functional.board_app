const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model { }

Stats.init(
    {
    player_id: {
        type: DataTypes.INTEGER,
        // allowNull: true,
        primaryKey: true,
        references: {
            model: 'user',
            key: 'user_id',
          },
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
    },
    credit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1000 
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'stats',
}
);

module.exports = Stats