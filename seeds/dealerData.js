const { Dealer } = require('../models');

const dealerData = [
  {
    table_id: 1,
  },
];

const seedDealers = () => Dealer.bulkCreate(dealerData);

module.exports = seedDealers;