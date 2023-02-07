const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedStats = require('./statsData')
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedStats();
  process.exit(0);
};

seedAll();
