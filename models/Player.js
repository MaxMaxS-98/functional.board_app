const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}
new Player.init(
  {
    isLoggedIn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
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
    },

  },
  { sequelize, modelName: "player" }
);

sequelize.sync({ force: true });
module.exports = Player;
