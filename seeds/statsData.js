const { Stats } = require('../models');

const statsdata = [
    {
        // id: 1,
        player_id: 1,
        credit: 5000
    },
    {
        // id: 2,
        player_id: 2,
        credit: 200
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

const seedStats = () => Stats.bulkCreate(statsdata);

module.exports = seedStats;