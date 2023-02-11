const { Record } = require('../models');

const recordData = [
    {
        user_id: 1,
        // record_username: 'Jane123',
    },
    {
        user_id: 2,
        // record_username: 'Jack456',
    },
    {
        user_id: 3,
        // record_username: 'John789',
        games_played: 100,
        games_won: 0
    },
    {
        user_id: 4,
        // record_username: 'Jim01234567',
        max_profit: 1000000
    },
];

const seedRecord = () => Record.bulkCreate(recordData);

module.exports = seedRecord;