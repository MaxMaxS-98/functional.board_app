const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stats extends Model { }

Stats.init(
    {
    // id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'user',
            key: 'user_id',
          }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: true,
    },    

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