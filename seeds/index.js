const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedRecord = require('./recordData')
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedRecord();
  process.exit(0);
};

seedAll();
