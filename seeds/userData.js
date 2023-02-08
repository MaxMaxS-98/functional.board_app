const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    username: 'Jane',
    email: 'jane@example.com',
    password: 'samplePassword123'
  },
  {
    user_id: 2,
    username: 'Jack',
    email: 'Jack@example.com',
    password: 'samplePassword123'
  },
  {
    user_id: 3,
    username: 'John',
    email: 'John@example.com',
    password: 'samplePassword123'
  },
  {
    user_id: 4,
    username: 'Jim',
    email: 'Jim@example.com',
    password: 'samplePassword123'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
