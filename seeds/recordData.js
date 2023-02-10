const { Record } = require('../models');

const recordData = [
    {
        // id: 1,
        user_name: 'Jane123',
    },
    {
        // id: 2,
        user_name: 'Jack456',
    },
    {
        // id: 3,
        user_name: 'John789',
        games_played: 999,
        games_won: 0
    },
    {
        // id: 4,
        user_name: 'Jim01234567',
        max_profit: 1000000
    },
];

const seedRecord = () => Record.bulkCreate(recordData);

module.exports = seedRecord;