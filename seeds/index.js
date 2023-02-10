const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedRecord = require('./recordData')
const seedPlayers = require('./playerData')
const seedDealers = require('./dealerData')
const seedTables = require('./tableData')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedTables();
  await seedDealers();
  await seedUsers();
  await seedPlayers();
  await seedRecord();
  process.exit(0);
};

seedAll();
