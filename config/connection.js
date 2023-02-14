const Sequelize = require('sequelize');
require('dotenv').config();



const sequelize = new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql'
});

module.exports = sequelize;



//edited this file for heroku deployment