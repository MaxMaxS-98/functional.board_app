const { Record } = require('../models');

const recorddata = [
    {
        // id: 1,
        player_id: 1,
    },
    {
        // id: 2,
        player_id: 2,
    },
    {
        // id: 3,
        player_id: 3,
        games_played: 999,
        games_won: 0
    },
    {
        // id: 4,
        player_id: 4,
        max_profit: 1000000
    },
];

const seedRecord = () => Record.bulkCreate(recorddata);

module.exports = seedRecord;