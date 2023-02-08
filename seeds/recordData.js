const { Record } = require('../models');

const recordData = [
    {
        // id: 1,
        user_id: 1,
    },
    {
        // id: 2,
        user_id: 2,
    },
    {
        // id: 3,
        user_id: 3,
        games_played: 999,
        games_won: 0
    },
    {
        // id: 4,
        user_id: 4,
        max_profit: 1000000
    },
];

const seedRecord = () => Record.bulkCreate(recordData);

module.exports = seedRecord;