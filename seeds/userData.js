const { User } = require('../models');

const userData = [
  {
    id: 1,
    player_id: 1,
    username: 'Jane',
    email: 'jane@example.com',
    password: 'samplePassword123'
  },
  {
    id: 2,
    player_id: 2,
    username: 'Jack',
    email: 'Jack@example.com',
    password: 'samplePassword123'
  },
  {
    id: 3,
    player_id: 3,
    username: 'John',
    email: 'John@example.com',
    password: 'samplePassword123'
  },
  {
    id: 4,
    player_id: 4,
    username: 'Jim',
    email: 'Jim@example.com',
    password: 'samplePassword123'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
