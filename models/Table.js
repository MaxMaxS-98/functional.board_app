const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Table extends Model { }

Table.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    players: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'player',
            key: 'id',
          }
    },
    dealer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'dealer',
            key: 'id',
          }
    },

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'table',
}
);

module.exports = Table
